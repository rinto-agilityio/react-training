// Libs
import { Types } from './actions'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { accountReducer, INITIAL_STATE } from './'

// Mocking data
import { users } from '@test/__mocks__/sample-data'

describe('Account reducer', () => {
  describe('Handle REHYDRATE', () => {
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
