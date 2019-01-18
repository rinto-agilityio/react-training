// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { Types } from '../actions'

const INITIAL_STATE = Immutable({
    data: null,
    isUploading: false,
    error: null
  }),
  updatePersist = (state, action) => state.merge({
    type: action.type,
    isUploading: false
  }),
  uploadPhotoRequest = (state, action) => state.merge({
    type: action.type,
    isUploading: true
  }),
  uploadPhotoCancel = (state, action) => state.merge({
    type: action.type,
    isUploading: false
  }),
  uploadPhotoSuccess = (state, action) => state.merge({
    type: action.type,
    data: action.response,
    isUploading: false,
    error: null
  }),
  uploadPhotoFailure = (state, action) => state.merge({
    type: action.type,
    data: null,
    error: action.error
  }),
  uploadReducer = createReducer(INITIAL_STATE, {
    [REHYDRATE]: updatePersist,

    [Types.UPLOAD_PHOTO_REQUEST]: uploadPhotoRequest,
    [Types.UPLOAD_PHOTO_CANCEL]: uploadPhotoCancel,
    [Types.UPLOAD_PHOTO_FAILURE]: uploadPhotoFailure,
    [Types.UPLOAD_PHOTO_SUCCESS]: uploadPhotoSuccess
  })

export { INITIAL_STATE, uploadReducer }
