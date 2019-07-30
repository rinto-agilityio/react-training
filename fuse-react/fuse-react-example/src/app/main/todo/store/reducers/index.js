import { combineReducers } from 'redux'

import todos from './todos'
import folders from './folders'
import filters from './filters'
import labels from './labels'

const reducer = combineReducers({
  todos,
  folders,
  filters,
  labels,
})

export default reducer
