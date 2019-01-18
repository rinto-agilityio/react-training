// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { users } from '@test/__mocks__/sample-data'
import { Types } from '../actions'

const INITIAL_STATE = Immutable({
    biography: null,
    full_name: null,
    id: null,
    profile_pic_url: null,
    username: null
  }),
  updatePersist = (state, action) => {
    const accountPayload =
      action.payload && action.payload.account ? action.payload.account : users[0]

    return state.merge({
      type: action.type,
      ...accountPayload
    })
  },

  /**
   * This is no auth yet, fixed data for current user
   * @param {object} state - Current state
   * @param {object} action - Action type and payload
   * @returns {object} - New state
   */
  loadAccountData = (state, action) => state.merge({
    type: action.type,
    ...users[0]
  }),

  accountReducer = createReducer(INITIAL_STATE, {
    [REHYDRATE]: updatePersist,

    [Types.LOAD_ACCOUNT_DATA]: loadAccountData
  })


export { INITIAL_STATE, accountReducer }
