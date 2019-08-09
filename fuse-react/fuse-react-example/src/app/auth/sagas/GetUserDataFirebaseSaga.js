import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux/user'
import firebaseService from 'app/services/firebaseService'

function* getUserData(action) {
  try {
    const response = yield call(
      [firebaseService, firebaseService.getUserData],
      action.uid
    )
    console.log('response', response);

    yield put({
      type: Types.SET_USER_DATA,
      user: response
    })
  } catch (error) {
    yield put({ type: Types.GET_USER_DATA_FAILED, error: error })
  }
}

function* GetUserDataFirebaseSaga() {
  yield takeLatest(Types.GET_USER_DATA, getUserData)
}

export default GetUserDataFirebaseSaga
