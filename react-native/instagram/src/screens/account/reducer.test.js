import { Types } from './actions'
import { REHYDRATE } from 'redux-persist/lib/constants'

import { users } from '@test/__mocks__/sample-data'
import { accountReducer, INITIAL_STATE } from './reducer'

describe('Account reducer', () => {
  describe('Should handle REHYDRATE', () => {
    it('Should load data from localStorage', () => {
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
      )
    })

    it('Should get fixed data for first time', () => {
      expect(
        accountReducer(INITIAL_STATE, {
          type: REHYDRATE
        })
      ).toEqual(
        INITIAL_STATE.merge({
          type: REHYDRATE,
          ...users[0]
        })
      )
    })
  })

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
    )
  })
})
