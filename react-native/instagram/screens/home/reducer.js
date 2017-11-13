import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";
import { Types as UploadTypes } from "../upload/actions";

export const INITIAL_STATE = Immutable({
  data: []
});

const updatePersist = (state, action) => {
  return state.merge({
    type: action.type,
    ...action.payload.home
  });
};

const getHomeDataRequest = (state, action) => {
  return state.merge({
    type: action.type
  });
};

const addData = (state, action) => {
  return state
    .merge({ type: action.type })
    .updateIn(["data"], arr => arr.concat([state.data.length]));
};

const addPhotoToList = (state, action) => {
  const singlePhoto = {
    url: action.response.downloadURL,
    like: 0,
    comments: []
  };
  return state
    .merge({ type: action.type })
    .updateIn(["data"], arr => arr.concat([singlePhoto]));
};

export const homeReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest,
  [UploadTypes.UPLOAD_PHOTO_SUCCESS]: addPhotoToList,
  [Types.ADD_DATA]: addData
});
