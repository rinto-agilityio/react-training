// Third party libs
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// Reducers
import { homeReducer } from '@screens/home/reducers'
import { uploadReducer } from '@screens/upload/reducers'
import { accountReducer } from '@screens/account/reducers'

const config = {
  key: 'instagram',
  storage,
  debug: true
}

const appReducer = persistReducer(
  config,
  combineReducers({
    home: homeReducer,
    upload: uploadReducer,
    account: accountReducer
  })
)

// Necessary middlewares for all env
let middleware = []

// Add some middlewares for development mode
if (process.env.NODE_ENV === 'development') {
  middleware = [...middleware, logger]
}

const configureStore = () => {
  const store = createStore(appReducer, compose(applyMiddleware(...middleware)))

  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
