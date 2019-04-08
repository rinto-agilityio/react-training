import
  { TYPES }
from '../constants/AcctionTypes'

export const AccountReducer = (state, action) => {

  switch(action.type) {
    case TYPES.UPDATE_PROFILE:
      return state.merge({
        ...state,
        account: {...state.account, ...action.data}
      });

    default:
      return state
  }
}
