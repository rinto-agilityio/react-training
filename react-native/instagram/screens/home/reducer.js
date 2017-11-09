import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";

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

export const homeReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest,
  [Types.ADD_DATA]: addData
});
