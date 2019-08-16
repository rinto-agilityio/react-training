import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

export const { Types, Creators } = createActions({
  loginWithFirebaseProcessing: ['data'],
  loginWithFirebaseSuccess: null,
  loginWithFirebaseFailed: null,
})

const InitialState = Immutable({
  success: false,
  isProcessing: false,
  error: {
    username: null,
    password: null,
  },
})

const loginWithFirebaseProcessing = state => (
  state.merge({
    isProcessing: true,
  })
)

const loginWithFirebaseSuccess = state => (
  state.merge({
    isProcessing: false,
    success: true,
  })
)

const loginWithFirebaseFailed = (state, action) => (
  state.merge({
    isProcessing: false,
    success: false,
    error: action.payload,
  })
)

// Assign handler to types.
const HANDLERS = {
  [Types.LOGIN_WITH_FIREBASE_PROCESSING]: loginWithFirebaseProcessing,
  [Types.LOGIN_WITH_FIREBASE_SUCCESS]: loginWithFirebaseSuccess,
  [Types.LOGIN_WITH_FIREBASE_FAILED]: loginWithFirebaseFailed,
}

// Create reducers by pass state and handlers
export const login = createReducer(InitialState, HANDLERS)
