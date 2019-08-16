import * as reduxModule from 'redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import createReducer from './reducers'
import rootSagas from './RootSagas'
/*
Fix for Firefox redux dev tools extension
https://github.com/zalmoxisus/redux-devtools-instrument/pull/19#issuecomment-400637274
 */
reduxModule.__DO_NOT_USE__ActionTypes.REPLACE = '@@redux/INIT'

const sagaMiddileware = createSagaMiddleware()
const loggerMiddleware = createLogger()
let middleWares = [sagaMiddileware]
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const persistedReducer = persistReducer(persistConfig, createReducer())
if (process.env.NODE_ENV === 'development') {
  middleWares = [sagaMiddileware, loggerMiddleware]
}

const store = createStore(persistedReducer, applyMiddleware(...middleWares))

store.asyncReducers = {}

sagaMiddileware.run(rootSagas)
const persistor = persistStore(store);


export const injectReducer = (key, reducer) => {
  if (store.asyncReducers[key]) {
    return
  }
  store.asyncReducers[key] = reducer
  store.replaceReducer(createReducer(store.asyncReducers))

  return store
}

export default { store, persistor }
