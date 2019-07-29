import { combineReducers } from 'redux'

import todos from '../reducers/todo'

const reducer = combineReducers({
  todos,
})

export default reducer
