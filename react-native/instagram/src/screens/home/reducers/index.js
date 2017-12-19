// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { Types } from '../actions'
import { Types as UploadTypes } from '@screens/upload/actions'
import { generateFeeds } from '@test/__mocks__/generate-data'

const INITIAL_STATE = Immutable({
    data: []
  }),
  updatePersist = (state, action) => {
    /**
     * Redux persist throw error if no data in this case
     * So, set default empty data for the first time install app
     */
    const { payload } = action,
      homePayload = payload && payload.home ? payload.home : {}

    return state.merge({
      type: action.type,
      ...homePayload
    })
  },
  getHomeDataRequest = (state, action) => state.merge({
    type: action.type
  }),
  addPhotoToList = (state, action) => state.merge({
    type: action.type,
    data: [action.response].concat(state.data)
  }),
  addComment = (state, action) => {
    const comment = Immutable(action.comment),
      postIdx = state.data.findIndex(item => item.id === comment.postId),
      newData = state.data.updateIn([postIdx, 'comments'], arr => arr.concat([comment.merge({ id: Date.now() }).without('postId')]))

    return state.merge({
      type: action.type,
      data: newData
    })
  },
  toggleLike = (state, action) => {
    let newLikes
    const notFoundIndex = -1,
      { postId, userId } = action.data,
      postIdx = state.data.findIndex(item => item.id === postId),
      { likes } = state.data[postIdx],
      likeIdx = likes.findIndex(item => item === userId)

    if (likeIdx !== notFoundIndex) {
      newLikes = likes.filter(item => item !== userId)
    } else {
      newLikes = likes.concat([userId])
    }

    const newData = state.data.setIn([postIdx, 'likes'], newLikes)

    return state.merge({
      type: action.type,
      data: newData
    })
  },

  /**
   * This is fake function get fake data to test render performance
   * @param {object} state - previous state
   * @param {string} action - Action type
   * @returns {object} - New state with fake items
   */
  fakeGetHomeDataRequest = (state, action) => {
    const numberItems = 1000

    return state.merge({
      type: action.type,
      data: generateFeeds(numberItems)
    })
  },
  homeReducer = createReducer(INITIAL_STATE, {
    [REHYDRATE]: updatePersist,

    // [Types.GET_HOME_DATA_REQUEST]: fakeGetHomeDataRequest, // This for performance testing only
    [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest,
    [Types.ADD_COMMENT]: addComment,
    [Types.TOGGLE_LIKE]: toggleLike,

    [UploadTypes.UPLOAD_PHOTO_SUCCESS]: addPhotoToList
  })

export { INITIAL_STATE, homeReducer }
