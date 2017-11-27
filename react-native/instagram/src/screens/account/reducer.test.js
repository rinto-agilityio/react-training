import { Types } from './actions';
import { REHYDRATE } from 'redux-persist/lib/constants';

import { users } from '../../test/__mocks__/sample-data';
import { accountReducer, INITIAL_STATE } from './reducer';

describe('Account reducer', () => {
  it('Should handle REHYDRATE', () => {
    expect(
      accountReducer(INITIAL_STATE, {
        type: REHYDRATE,
        payload: {
          account: {}
        }
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: REHYDRATE
      })
    );
  });

  it('Should handle LOAD_ACCOUNT_DATA', () => {
    expect(
      accountReducer(INITIAL_STATE, {
        type: Types.LOAD_ACCOUNT_DATA
      })
    ).toEqual(
      INITIAL_STATE.merge({
        type: Types.LOAD_ACCOUNT_DATA,
        ...users[0]
      })
    );
  });
});
