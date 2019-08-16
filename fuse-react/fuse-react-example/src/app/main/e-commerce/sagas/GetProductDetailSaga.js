import { call, put, takeLatest } from 'redux-saga/effects'
import { Types } from '../redux'
import { getProductDetailApi } from '../../../utils/Apis'

function* getProductDetail(action) {
  try {
    // create a saga call with API get getProductDetail
    const response = yield call(getProductDetailApi, {
      productId: action.productId,
    })

    if (response.status === 200) {
      yield put({
        type: Types.GET_PRODUCT_DETAIL_SUCCESS,
        productEditing: response.data,
      })
    }
  } catch (e) {
    // In case: getProducts failed
    yield put({
      type: Types.GET_PRODUCT_DETAIL_FAILED,
      error: e,
    })
  }
}

function* GetProductDetailSaga() {
  yield takeLatest(Types.GET_PRODUCT_DETAIL_PROCESSING, getProductDetail)
}

export default GetProductDetailSaga
