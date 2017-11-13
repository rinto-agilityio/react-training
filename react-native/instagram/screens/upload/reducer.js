import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";

export const INITIAL_STATE = Immutable({
  data: null,
  isUploading: false
});

const updatePersist = (state, action) => {
  return state.merge({
    type: action.type,
    ...action.payload.upload
  });
};

const uploadPhotoRequest = (state, action) => {
  return state.merge({
    type: action.type
  });
};

const uploadPhotoCancel = (state, action) => {
  return state.merge({
    type: action.type
  });
};

export const uploadReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.UPLOAD_PHOTO_REQUEST]: uploadPhotoRequest,
  [Types.UPLOAD_PHOTO_CANCEL]: uploadPhotoCancel
});
