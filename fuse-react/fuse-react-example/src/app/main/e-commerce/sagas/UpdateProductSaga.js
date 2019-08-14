import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux'
import { updateProductApi } from '../../../utils/Apis'

function* updateProduct(action) {
  try {
    console.log('action', action)

    // create a saga call with API update product
    const response = yield call(updateProductApi, action.data)
    console.log('response', response)

    if (response.status === 200) {
      yield put({
        type: Types.UPDATE_PRODUCT_SUCCESS,
        product: response.data,
      })
    }
  } catch (e) {
    // In case: getProducts failed
    yield put({
      type: Types.UPDATE_PRODUCT_FAILED,
      error: e,
    })
  }
}

/*
  Starts uploadStudents on each dispatched `UPLOAD_STUDENTS` action.
*/
function* UpdateProductsSaga() {
  yield takeLatest(Types.UPDATE_PRODUCT_PROCESSING, updateProduct)
}

export default UpdateProductsSaga
