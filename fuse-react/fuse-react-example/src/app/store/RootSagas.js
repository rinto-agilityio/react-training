// import libs
import { all } from 'redux-saga/effects'

import getProductsSaga from '../main/e-commerce/sagas/getProductsSaga'

export default function* RootSagas() {
  yield all([getProductsSaga()])
}
