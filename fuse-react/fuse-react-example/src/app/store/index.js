import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import RootSagas from './RootSagas'
import fuse from './reducers/fuse/index'
import auth from 'app/auth/store/reducers'
import quickPanel from 'app/fuse-layouts/shared-components/quickPanel/store/reducers'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()

// Create root reducer for store
const rootReducer = combineReducers({
  auth,
  fuse,
  quickPanel,
})

let middleWares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleWares = [loggerMiddleware, sagaMiddleware]
}

const store = createStore(rootReducer, applyMiddleware(...middleWares))

// RUN SAGA
sagaMiddleware.run(RootSagas)

store.asyncReducers = {}

export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(rootReducer)
  return store
}

export default store
