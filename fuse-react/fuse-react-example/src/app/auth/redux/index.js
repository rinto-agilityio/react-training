import { combineReducers } from 'redux'
import { user } from './user'
import { register } from './register'
import { login } from './login'

const authReducers = combineReducers({
  user,
  login,
  register,
})

export default authReducers
