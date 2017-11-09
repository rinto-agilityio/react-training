import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";

export const INITIAL_STATE = Immutable({
  data: []
});

const updatePersist = (state, action) => {
  return state.merge({
    ...action.payload.appSettings,
    type: action.type
  });
};

const getHomeDataRequest = (state, action) => {
  return state.merge({
    type: action.type
  });
};

export const homeReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest
});
