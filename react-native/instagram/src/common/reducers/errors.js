// Libs
import Immutable from 'seamless-immutable'
import { createTypes, createReducer } from 'reduxsauce'

const Types = createTypes(`
    ADD_ERROR
    CLEAR_ERROR
  `),
  INITIAL_STATE = Immutable({
    message: null,
    type: null
  }),

  addAppError = (state, action) => {
    console.log('addAppError')
    console.log('state: ', state)
    console.log('action: ', action)
    return Immutable(state).merge({
      type: 'ABCD'
    })
  },

  clearAppError = (state, action) => state.merge({
    message: null,
    type: null
  }),

  errorReducer = createReducer(INITIAL_STATE, {
    [Types.ADD_ERROR]: addAppError,
    [Types.CLEAR_ERROR]: clearAppError
  })

export { Types, INITIAL_STATE, errorReducer }
