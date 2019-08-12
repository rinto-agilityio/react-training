import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  getUserData: ['uid'],
  getUserDataFailed: null,
  setUserData: ['user'],
  showMessage: ['message'],
  logOutUser: null
})

const InitialState = Immutable({
  role: 'guest',
  data: {
    displayName: 'John Doe',
    photoURL: 'assets/images/avatars/Velazquez.jpg',
    email: 'johndoe@withinpixels.com',
    shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
  },
})

const getUserData = (state, action) => {
  return state.merge({
    isProcessing: true,
  })
}

const getUserDataFailed = (state, action) => {
  return state.merge({
    error: action.error,
  })
}

const setUserData = (state, action) => {
  return state.merge({
    ...state,
    ...action.user,
  })
}

const logOutUser = state => {
  return state.merge({
    ...InitialState
  })
}

const showMessage = (state, action) => {
  return state.merge({
    isProcessing: false,
    success: false,
    error: action.payload
  })
}

// Assign handler to types.
const HANDLERS = {
  [Types.GET_USER_DATA]: getUserData,
  [Types.SET_USER_DATA]: setUserData,
  [Types.SHOW_MESSAGE]: showMessage,
  [Types.GET_USER_DATA_FAILED]: getUserDataFailed,
  [Types.LOG_OUT_USER]: logOutUser
}

// Create reducers by pass state and handlers
export const user = createReducer(InitialState, HANDLERS)
