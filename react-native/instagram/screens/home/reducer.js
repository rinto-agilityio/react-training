import { createReducer } from "reduxsauce";
import Immutable from "seamless-immutable";

import { Types } from "./actions";

export const INITIAL_STATE = Immutable({
  data: []
});

const getHomeDataRequest = (state, action) => {
  console.log("state: ", state);
  return state;
};

export const homeReducer = createReducer(INITIAL_STATE, {
  [Types.GET_HOME_DATA_REQUEST]: getHomeDataRequest
});
