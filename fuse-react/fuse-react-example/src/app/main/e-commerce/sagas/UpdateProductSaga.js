import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux/actions'
import { updateProductApi } from '../../../utils/Apis'

function* updateProduct(action) {
  try {
    // create a saga call with API update product
    const response = yield call(updateProductApi, action.data)
    if (response.status === 200) {
      yield put({
        type: Types.UPDATE_PRODUCT_SUCCESS,
        product: response.data,
      })
    }
  } catch (e) {
    // In case: update product failed
    yield put({
      type: Types.UPDATE_PRODUCT_FAILED,
      error: e,
    })
  }
}

function* UpdateProductsSaga() {
  yield takeLatest(Types.UPDATE_PRODUCT_PROCESSING, updateProduct)
}

export default UpdateProductsSaga
