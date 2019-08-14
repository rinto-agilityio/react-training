// import libs
import { all } from 'redux-saga/effects'

import GetProductsSaga from '../main/e-commerce/sagas/GetProductsSaga'
import GetProductDetailSaga from '../main/e-commerce/sagas/GetProductDetailSaga'
import LoginwithFirebaseSaga from '../../app/auth/sagas/LoginWithFirebaseSaga'
import GetUserDataFirebaseSaga from '../../app/auth/sagas/GetUserDataFirebaseSaga'
import UpdateProduct from '../main/e-commerce/sagas/UpdateProductSaga'

export default function* RootSagas() {
  yield all([
    GetProductsSaga(),
    LoginwithFirebaseSaga(),
    GetUserDataFirebaseSaga(),
    GetProductDetailSaga(),
    UpdateProduct(),
  ])
}
