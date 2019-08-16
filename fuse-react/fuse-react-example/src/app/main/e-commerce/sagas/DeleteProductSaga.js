import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux'
import { deleteProductApi } from '../../../utils/Apis'

function* deleteProduct(action) {
  try {
    // create a saga call with API delete product
    const response = yield call(deleteProductApi, action.listId)
    if (response.status === 200) {
      yield put({
        type: Types.DELETE_PRODUCT_SUCCESS,
        products: response.data,
      })
    }
  } catch (e) {
    // In case: delete products failed
    yield put({
      type: Types.DELETE_PRODUCT_FAILED,
      error: e,
    })
  }
}

/*
  Starts uploadStudents on each dispatched `UPLOAD_STUDENTS` action.
*/
function* DeleteProductSaga() {
  yield takeLatest(Types.DELETE_PRODUCT_PROCESSING, deleteProduct)
}

export default DeleteProductSaga
