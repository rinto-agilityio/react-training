// Libs
import { combineReducers } from 'redux'

// Reducers
import { homeReducer } from '@screens/home/reducers'
import { uploadReducer } from '@screens/upload/reducers'
import { accountReducer } from '@screens/account/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  upload: uploadReducer,
  account: accountReducer
})

export default rootReducer
