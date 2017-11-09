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
    ...action.payload.search
  });
};

export const searchReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist
});
