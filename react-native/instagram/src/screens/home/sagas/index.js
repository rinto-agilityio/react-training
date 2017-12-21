// Libs
import { takeLatest, takeEvery, call, put, all } from 'redux-saga/effects'
import { Types } from '../actions'
import { Types as ErrorTypes } from '@common/reducers/errors'

// Helpers
import { getAllFeeds, postToggleLike, postNewComment } from '@helpers/api'
import ERROR_TYPES from '@constants/error-types'

/**
 * Dispatch an action
 * @returns {object} - Dispatch action
 */
function* getHomeDataRequest() {
  const response = yield call(getAllFeeds)

  if (response && response.ok) {
    return yield put({
      type: Types.GET_HOME_DATA_SUCCESS,
      response: response.data
    })
  }

  return yield all([
    put({ type: Types.GET_HOME_DATA_FAILURE, error: response.error }),
    put({
      type: ErrorTypes.ADD_ERROR,
      error: {
        message: response.error.message,
        type: ERROR_TYPES.API
      }
    })
  ])
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
 * @param {object} action - Action type and data
 * @returns {object} - Dispatch action
 */
function* addCommentRequest(action) {
  try {
    const response = yield call(postNewComment, action.comment)

    if (response && response.ok) {
      return yield put({
        type: Types.ADD_COMMENT_SUCCESS,
        response: response.data
      })
    }

    return yield put({
      type: Types.ADD_COMMENT_FAILURE,
      error: response.error
    })
  } catch (error) {
    return yield put({
      type: Types.ADD_COMMENT_FAILURE,
      error
    })
  }
}

/**
 * @returns {array} yield list
 */
export default function* homeSaga() {
  return yield [
    takeLatest(Types.GET_HOME_DATA_REQUEST, getHomeDataRequest),
    takeEvery(Types.TOGGLE_LIKE, toggleLike),
    takeEvery(Types.ADD_COMMENT_REQUEST, addCommentRequest)
  ]
}
