import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux'
import { addNewProductApi } from '../../../utils/Apis'

function* addnewProduct(action) {
  try {
    // create a saga call with API add new product
    const response = yield call(addNewProductApi, action.data)
    if (response.status === 200) {
      yield put({
        type: Types.ADD_NEW_PRODUCT_SUCCESS,
        product: response.data,
      })
    }
  } catch (e) {
    // In case: getProducts failed
    yield put({
      type: Types.ADD_NEW_PRODUCT_FAILED,
      error: e,
    })
  }
}

function* AddNewProductSaga() {
  yield takeLatest(Types.ADD_NEW_PRODUCT_PROCESSING, addnewProduct)
}

export default AddNewProductSaga
