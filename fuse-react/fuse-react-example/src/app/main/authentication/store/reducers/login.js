import Immutable from 'seamless-immutable'
import * as Actions from '../actions'

const initialState = Immutable({
  token: ''
})
const loginReducer = function(state = initialState, action) {
  switch (action.type) {
    case Actions.SIGN_IN:
      return state.merge({
        ...state,
        token: action.payload
      })
    default:
      return state
  }
}

export default loginReducer
