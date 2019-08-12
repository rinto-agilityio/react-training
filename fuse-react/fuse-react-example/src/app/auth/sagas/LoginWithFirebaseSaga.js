import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux/login'
import firebaseService from 'app/services/firebaseService'

function* loginWithFirebase(action) {
  try {
    const auth = firebaseService.auth
    const { username, password } = action.data
    yield call([auth, auth.signInWithEmailAndPassword], username, password)
    yield put({ type: Types.LOGIN_WITH_FIREBASE_SUCCESS })
  } catch (error) {
    const usernameErrorCodes = [
      'auth/email-already-in-use',
      'auth/invalid-email',
      'auth/operation-not-allowed',
      'auth/user-not-found',
      'auth/user-disabled',
    ]
    const passwordErrorCodes = ['auth/weak-password', 'auth/wrong-password']

    const errRes = {
      username: usernameErrorCodes.includes(error.code) ? error.message : null,
      password: passwordErrorCodes.includes(error.code) ? error.message : null,
    }

    // if (error.code === 'auth/invalid-api-key') {
    //   dispatch(Actions.showMessage({ message: error.message }))
    // }
    yield put({ type: Types.LOGIN_WITH_FIREBASE_FAILED, payload: errRes })
  }
}

function* loginWithFirebaseSaga() {
  yield takeLatest(Types.LOGIN_WITH_FIREBASE_PROCESSING, loginWithFirebase)
}

export default loginWithFirebaseSaga
