// Libs
import { takeLatest, call, put } from 'redux-saga/effects'
import { Types } from '../actions'

// Helpers
import { postNewFeed } from '@helpers/api'

/**
 * Dispatch an action
 * @param {object} action - Action types and feed data
 * @returns {object} - Dispatch action
 */
function* uploadPhotoRequest(action) {
  try {
    return yield call(postNewFeed, action.feed)

    /*
    if (response && response.ok) {
      return yield put({
        type: Types.UPLOAD_PHOTO_SUCCESS,
        response: response.data
      })
    }

    return yield put({
      type: Types.UPLOAD_PHOTO_FAILURE,
      error: response.error
    })
    */
  } catch (error) {
    return yield put({
      type: Types.UPLOAD_PHOTO_FAILURE,
      error
    })
  }
}

/**
 * @returns {array} yield list
 */
export default function* uploadSaga() {
  return yield [takeLatest(Types.UPLOAD_PHOTO_REQUEST, uploadPhotoRequest)]
}
