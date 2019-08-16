import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux'
import { getProductApi } from '../../../utils/Apis'

function* getProducts() {
  try {
    // create a saga call with API get getProducts
    const response = yield call(getProductApi)
    if (response.status === 200) {
      yield put({
        type: Types.GET_PRODUCTS_SUCCESS,
        productList: response.data,
      })
    }
  } catch (e) {
    // In case: getProducts failed
    yield put({
      type: Types.GET_PRODUCTS_FAILED,
      error: e,
    })
  }
}

function* GetProductsSaga() {
  yield takeLatest(Types.GET_PRODUCTS_PROCESSING, getProducts)
}

export default GetProductsSaga
