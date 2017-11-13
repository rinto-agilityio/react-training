import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";

export const INITIAL_STATE = Immutable({
  data: null,
  isUploading: false,
  error: null
});

const updatePersist = (state, action) => {
  return state.merge({
    type: action.type,
    isUploading: false
  });
};

const uploadPhotoRequest = (state, action) => {
  return state.merge({
    type: action.type,
    isUploading: true
  });
};

const uploadPhotoCancel = (state, action) => {
  return state.merge({
    type: action.type,
    isUploading: false
  });
};

const uploadPhotoSuccess = (state, action) => {
  return state.merge({
    type: action.type,
    data: action.response,
    isUploading: false,
    error: null
  });
};

const uploadPhotoFailure = (state, action) => {
  return state.merge({
    type: action.type,
    data: null,
    error: action.error
  });
};

export const uploadReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.UPLOAD_PHOTO_REQUEST]: uploadPhotoRequest,
  [Types.UPLOAD_PHOTO_CANCEL]: uploadPhotoCancel,
  [Types.UPLOAD_PHOTO_FAILURE]: uploadPhotoFailure,
  [Types.UPLOAD_PHOTO_SUCCESS]: uploadPhotoSuccess
});
