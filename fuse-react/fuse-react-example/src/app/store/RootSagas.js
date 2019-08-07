// import libs
import { all } from 'redux-saga/effects'

import getProducts from '../main/e-commerce/sagas/getProducts'

export default function* RootSagas() {
  yield all([getProducts])
}
