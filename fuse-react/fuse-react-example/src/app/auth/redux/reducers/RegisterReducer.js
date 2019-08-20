
import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Types } from '../actions/RegisterAction'

const InitialState = Immutable({
  success: false,
  isProcessing: false,
  error: {
    username: null,
    password: null,
  },
})

const registerWithFirebaseProcessing = state => (
  state.merge({
    isProcessing: true,
  })
)

const registerWithFirebaseSuccess = state => (
  state.merge({
    isProcessing: false,
    success: true,
    error: {},
  })
)

const registerWithFirebaseFailed = (state, action) => (
  state.merge({
    isProcessing: false,
    success: false,
    error: action.error,
  })
)

// Assign handler to types.
const HANDLERS = {
  [Types.REGISTER_WITH_FIREBASE_PROCESSING]: registerWithFirebaseProcessing,
  [Types.REGISTER_WITH_FIREBASE_SUCCESS]: registerWithFirebaseSuccess,
  [Types.REGISTER_WITH_FIREBASE_FAILED]: registerWithFirebaseFailed,
}

// Create reducers by pass state and handlers
export const register = createReducer(InitialState, HANDLERS)
