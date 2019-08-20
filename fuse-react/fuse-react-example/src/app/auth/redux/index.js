import { combineReducers } from 'redux'
import { user } from './reducers/UserReducer'
import { register } from './reducers/RegisterReducer'
import { login } from './reducers/LoginReducer'

const authReducers = combineReducers({
  user,
  login,
  register,
})

export default authReducers
