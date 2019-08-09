// import libs
import { all } from 'redux-saga/effects'

import getProductsSaga from '../main/e-commerce/sagas/getProductsSaga'
import LoginwithFirebaseSaga from '../../app/auth/sagas/LoginWithFirebaseSaga'
import GetUserDataFirebaseSaga from '../../app/auth/sagas/GetUserDataFirebaseSaga'

export default function* RootSagas() {
  yield all([
    getProductsSaga(),
    LoginwithFirebaseSaga(),
    GetUserDataFirebaseSaga()
  ])
}
