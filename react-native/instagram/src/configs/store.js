// Libs
import { createStore, applyMiddleware, compose } from 'redux'
import { logger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage'

// .env value config
import { PERSIST_STORE_KEY } from 'react-native-dotenv'

// Reducers
import rootReducer from './rootReducer'

const isProduction = process.env.NODE_ENV === 'production',
  middleware = [],
  config = {
    key: PERSIST_STORE_KEY,
    storage,
    debug: !isProduction
  }

// Add some middlewares if not production mode
if (!isProduction) {
  middleware.push(logger)
}

const configureStore = () => {
  const store = createStore(
      persistReducer(config, rootReducer),
      compose(applyMiddleware(...middleware))
    ),
    persistor = persistStore(store)

  return { persistor, store }
}

export default configureStore
