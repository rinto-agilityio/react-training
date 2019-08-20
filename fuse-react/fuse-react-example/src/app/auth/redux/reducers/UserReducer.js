import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { Types } from '../actions/UserAction'

const InitialState = Immutable({
  role: 'guest',
  data: {
    displayName: 'John Doe',
    photoURL: 'assets/images/avatars/Velazquez.jpg',
    email: 'johndoe@withinpixels.com',
    shortcuts: ['calendar', 'mail', 'contacts', 'todo'],
  },
})

const getUserData = state => (
  state.merge({ isProcessing: true })
)

const getUserDataFailed = (state, action) => (
  state.merge({
    ...state,
    error: action.error,
  })
)

const setUserData = (state, action) => (
  state.merge({
    ...state,
    ...action.user,
  })
)


const logOutUser = state => (
  state.merge({ ...InitialState })
)

const showMessage = (state, action) => (
  state.merge({
    ...state,
    isProcessing: false,
    success: false,
    error: action.payload,
  })
)

// Assign handler to types.
const HANDLERS = {
  [Types.GET_USER_DATA]: getUserData,
  [Types.SET_USER_DATA]: setUserData,
  [Types.SHOW_MESSAGE]: showMessage,
  [Types.GET_USER_DATA_FAILED]: getUserDataFailed,
  [Types.LOG_OUT_USER]: logOutUser,
}

// Create reducers by pass state and handlers
export const user = createReducer(InitialState, HANDLERS)
