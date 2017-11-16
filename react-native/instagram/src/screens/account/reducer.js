import Immutable from "seamless-immutable";
import { createReducer } from "reduxsauce";
import { REHYDRATE } from "redux-persist/lib/constants";

import { Types } from "./actions";

export const INITIAL_STATE = Immutable({
  biography: null,
  full_name: null,
  id: null,
  profile_pic_url: null,
  username: null
});

const updatePersist = (state, action) => {
  return state.merge({
    type: action.type,
    ...action.payload.account
  });
};

const loadAccountData = (state, action) => {
  // FIX ME: Fixed data for now, no auth yet
  return state.merge({
    type: action.type,
    biography: "Personal photos",
    full_name: "Huy Nguyen",
    id: 2250323280,
    profile_pic_url:
      "https://instagram.fdad3-1.fna.fbcdn.net/t51.2885-19/s150x150/13642880_138562836574694_572060052_a.jpg",
    username: "huyb1991"
  });
};

export const accountReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.LOAD_ACCOUNT_DATA]: loadAccountData
});
