// Libs
import { takeLatest, takeEvery, call, put } from 'redux-saga/effects'
import { Types } from '../actions'

// Helpers
import { getAllFeeds, postToggleLike } from '@helpers/api'

/**
 * Dispatch an action
 * @returns {object} - Dispatch action
 */
function* getHomeDataRequest() {
  try {
    const response = yield call(getAllFeeds)

    if (response && response.ok) {
      return yield put({
        type: Types.GET_HOME_DATA_SUCCESS,
        response: response.data
      })
    }

    return yield put({
      type: Types.GET_HOME_DATA_FAILURE,
      error: response.error
    })
  } catch (error) {
    return yield put({
      type: Types.GET_HOME_DATA_FAILURE,
      error
    })
  }
}

/**
 * @param {object} action - Action type and like data: userId and feedId
 * @returns {object} - Dispatch action
 */
function* toggleLike(action) {
  const { data } = action

  yield call(postToggleLike, data)
}

/**
 * @returns {array} yield list
 */
export default function* homeSaga() {
  return yield [
    takeLatest(Types.GET_HOME_DATA_REQUEST, getHomeDataRequest),
    takeEvery(Types.TOGGLE_LIKE, toggleLike)
  ]
}
