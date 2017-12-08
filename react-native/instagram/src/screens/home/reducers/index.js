// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { Types } from '../actions'
import { Types as UploadTypes } from '@screens/upload/actions'

export const INITIAL_STATE = Immutable({
  data: []
})

const updatePersist = (state, action) => {
  /**
   * Redux persist throw error if no data in this case
   * So, set default empty data for the first time install app
   */
  const homePayload =
    action.payload && action.payload.home ? action.payload.home : {}

  return state.merge({
    type: action.type,
    ...homePayload
  })
}

const getHomeDataRequest = (state, action) => {
  return state.merge({
    type: action.type
  })
}

const addPhotoToList = (state, action) => {
  return state
    .merge({ type: action.type })
    .updateIn(['data'], arr => [action.response].concat(arr))
}

const addComment = (state, action) => {
  const comment = Immutable(action.comment),
    postIdx = state.data.findIndex(item => item.id === comment.postId)

  return state
    .merge({ type: action.type })
    .updateIn(['data', postIdx, 'comments'], arr =>
      arr.concat([comment.merge({ id: Date.now() }).without('postId')])
    )
}

const toggleLike = (state, action) => {
  let newLikes
  const { postId, userId } = action.data,
    postIdx = state.data.findIndex(item => item.id === postId),
    likes = state.data[postIdx].likes,
    post = state.data.find(item => item.id === postId),
    likeIdx = likes.findIndex(item => item === userId)

  if (likeIdx != -1) {
    newLikes = likes.filter(item => item !== userId)
  } else {
    newLikes = likes.concat([userId])
  }

  return state
    .merge({ type: action.type })
    .setIn(['data', postIdx, 'likes'], newLikes)
}

export const homeReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest,
  [Types.ADD_COMMENT]: addComment,
  [Types.TOGGLE_LIKE]: toggleLike,
  [UploadTypes.UPLOAD_PHOTO_SUCCESS]: addPhotoToList
})
