// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'

// Helpers
import Types from '../actions'

const INITIAL_STATE = Immutable({
    message: null,
    type: null
  }),

  addError = (state, action) => Immutable(state).merge({
    type: action.error.type,
    message: action.error.message
  }),

  clearError = (state, action) => Immutable(state).merge({
    type: null,
    message: null
  }),

  errorReducer = createReducer(INITIAL_STATE, {
    [Types.ADD_ERROR]: addError,
    [Types.CLEAR_ERROR]: clearError
  })

export { Types, INITIAL_STATE, errorReducer }
