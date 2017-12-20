// Libs
import { takeLatest, call, put } from 'redux-saga/effects'
import { Types } from '../actions'

// Helpers
import { getAllFeeds } from '@helpers/api'

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
 * @returns {array} yield list
 */
export default function* homeSaga() {
  return yield [takeLatest(Types.GET_HOME_DATA_REQUEST, getHomeDataRequest)]
}
