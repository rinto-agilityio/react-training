import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { logger } from "redux-logger";
import storage from "redux-persist/es/storage";

import { homeReducer } from "../screens/home/reducer";

const config = {
  key: "instagram",
  storage,
  debug: true
};

const appReducer = combineReducers({
  home: homeReducer
});

const reducer = persistReducer(config, appReducer);

const middleware = [logger];

export default function configureStore() {
  const store = createStore(reducer, compose(applyMiddleware(...middleware)));

  const persistor = persistStore(store);

  return { persistor, store };
}
