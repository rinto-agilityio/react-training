import { call, put, takeLatest } from 'redux-saga/effects'
import firebaseService from 'app/services/firebaseService'
import {
  defaultSettings,
} from '@fuse/FuseDefaultSettings'
import { Types } from '../redux/actions/RegisterAction'
import { Types as userTypes } from '../redux/actions/UserAction'

function* registerWithFirebase(action) {
  try {
    const { auth } = firebaseService
    const { email, password, displayName } = action.data
    const response = yield call([auth, auth.createUserWithEmailAndPassword], email, password)
    if (response.user) {
      const { user } = response
      const newUser = {
        uid: user.uid,
        from: 'firebase',
        role: 'admin',
        data: {
          displayName,
          email,
          settings: { ...defaultSettings },
        },
      }
      yield call([auth, auth.currentUser.updateProfile], newUser)
      yield call([firebaseService, firebaseService.updateUserData], newUser)

      yield put({
        type: userTypes.SET_USER_DATA,
        user: newUser,
      })
    }
    yield put({ type: Types.REGISTER_WITH_FIREBASE_SUCCESS })
  } catch (error) {
    const usernameErrorCodes = [
      'auth/operation-not-allowed',
      'auth/user-not-found',
      'auth/user-disabled',
    ]

    const emailErrorCodes = [
      'auth/email-already-in-use',
      'auth/invalid-email',
    ]

    const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password']

    const response = {
      email: emailErrorCodes.includes(error.code) ? error.message : null,
      displayName: usernameErrorCodes.includes(error.code)
        ? error.message
        : null,
      password: passwordErrorCodes.includes(error.code)
        ? error.message
        : null,
    }

    yield put({ type: Types.REGISTER_WITH_FIREBASE_FAILED, error: response })
  }
}

function* RegisterWithFirebaseSaga() {
  yield takeLatest(Types.REGISTER_WITH_FIREBASE_PROCESSING, registerWithFirebase)
}

export default RegisterWithFirebaseSaga
