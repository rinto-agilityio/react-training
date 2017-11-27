import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/es/storage';

import { homeReducer } from '../screens/home/reducer';
import { uploadReducer } from '../screens/upload/reducer';
import { accountReducer } from '../screens/account/reducer';

const config = {
  key: 'instagram',
  storage,
  debug: true
};

const appReducer = persistReducer(
  config,
  combineReducers({
    home: homeReducer,
    upload: uploadReducer,
    account: accountReducer
  })
);

const middleware = [logger];

export default function configureStore() {
  const store = createStore(
    appReducer,
    compose(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store);

  return { persistor, store };
}
