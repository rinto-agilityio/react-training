// import libs
import { all } from 'redux-saga/effects'

import LoginwithFirebaseSaga from 'app/auth/sagas/LoginWithFirebaseSaga'
import GetUserDataFirebaseSaga from 'app/auth/sagas/GetUserDataFirebaseSaga'
import RegisterWithFirebaseSaga from 'app/auth/sagas/RegisterWithFirebaseSaga'

import GetProductsSaga from '../main/e-commerce/sagas/GetProductsSaga'
import GetProductDetailSaga from '../main/e-commerce/sagas/GetProductDetailSaga'
import UpdateProduct from '../main/e-commerce/sagas/UpdateProductSaga'
import AddNewProductSaga from '../main/e-commerce/sagas/AddNewProductSaga'
import DeleteProductSaga from '../main/e-commerce/sagas/DeleteProductSaga'

export default function* RootSagas() {
  yield all([
    GetProductsSaga(),
    LoginwithFirebaseSaga(),
    GetUserDataFirebaseSaga(),
    GetProductDetailSaga(),
    UpdateProduct(),
    AddNewProductSaga(),
    DeleteProductSaga(),
    RegisterWithFirebaseSaga(),
  ])
}
