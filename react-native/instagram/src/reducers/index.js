// Libs
import { combineReducers } from 'redux'

// Reducers
import { homeReducer } from '@screens/home/reducers'
import { uploadReducer } from '@screens/upload/reducers'
import { accountReducer } from '@screens/account/reducers'
import { errorReducer } from '@screens/error/reducers'

const rootReducer = combineReducers({
  home: homeReducer,
  upload: uploadReducer,
  account: accountReducer,
  error: errorReducer
})

export default rootReducer
