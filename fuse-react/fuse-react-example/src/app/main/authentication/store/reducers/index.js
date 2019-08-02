import { combineReducers } from 'redux'

import login from './login'

const authReducer = combineReducers({
  login
})

export default authReducer
