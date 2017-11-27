import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';
import { REHYDRATE } from 'redux-persist/lib/constants';

import { users } from '../../test/__mocks__/sample-data';
import { Types } from './actions';

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
    ...users[0]
  });
};

export const accountReducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: updatePersist,

  [Types.LOAD_ACCOUNT_DATA]: loadAccountData
});
