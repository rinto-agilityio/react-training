// Libs
import Immutable from 'seamless-immutable'
import { createReducer } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/lib/constants'

// Helpers
import { Types } from '../actions'

const INITIAL_STATE = Immutable({
    message: null,
    errorType: null
  }),

  /**
   * For error reducer, persist is clear all errors
   * @param {object} state - Old state
   * @param {object} action - Action types
   * @returns {object} - Reset all errors
   */
  updatePersist = (state, action) => Immutable(state).merge({
    type: action.type,
    message: null,
    errorType: null
  }),

  addError = (state, action) => Immutable(state).merge({
    type: action.type,
    errorType: action.error.type,
    message: action.error.message
  }),

  clearError = (state, action) => Immutable(state).merge({
    type: action.type,
    errorType: null,
    message: null
  }),

  errorReducer = createReducer(INITIAL_STATE, {
    [REHYDRATE]: updatePersist,

    [Types.ADD_ERROR]: addError,
    [Types.CLEAR_ERROR]: clearError
  })

export { Types, INITIAL_STATE, errorReducer }
