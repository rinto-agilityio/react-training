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

const addPhotoToList = (state, action) => {
  return state
    .merge({ type: action.type })
    .updateIn(["data"], arr => arr.concat([action.response]));
};

const addComment = (state, action) => {
  const comment = Immutable(action.comment),
    postIdx = state.data.findIndex(item => item.id === comment.postId);

  return state
    .merge({ type: action.type })
    .updateIn(["data", postIdx, "comments"], arr =>
      arr.concat([comment.merge({ id: Date.now() }).without("postId")])
    );
};

export const homeReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest,
  [UploadTypes.UPLOAD_PHOTO_SUCCESS]: addPhotoToList,
  [Types.ADD_COMMENT]: addComment
});
