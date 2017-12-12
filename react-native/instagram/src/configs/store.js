// Libs
import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// .env value config
import { PERSIST_STORE_KEY } from 'react-native-dotenv'

// Reducers
import rootReducer from './rootReducer'

const config = {
  key: PERSIST_STORE_KEY,
  storage,
  debug: true
}

// Necessary middlewares for all env
let middleware = []

// Add some middlewares for development mode
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

const configureStore = () => {
  const store = createStore(
    persistReducer(config, rootReducer),
    compose(applyMiddleware(...middleware))
  )
  const persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
