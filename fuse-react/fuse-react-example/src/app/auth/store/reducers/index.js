import { combineReducers } from 'redux'
import { user } from '../../redux/user'
// import login from './login.reducer'
import register from './register.reducer'
import { login } from '../../redux/login'

const authReducers = combineReducers({
  user,
  login,
  register,
  // authReducer
})

export default authReducers
