import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { Types } from '../redux'

function* getProducts(action) {
  try {
    // create a saga call with API get getProducts
    const response = yield call(axios.get('/api/e-commerce-app/products'))
    console.log(response)

    //   if (response.ok) {
    //     // In case: upload students successfully
    //     yield put({
    //       type: Types.UPLOAD_STUDENTS_SUCCESS,
    //       newStudents: response.data
    //     })
    //   } else {
    //     // In case: add student failed
    //     yield put({
    //       type: Types.UPLOAD_STUDENTS_FAILED,
    //       newStudents: response.data
    //     })
    //   }
  } catch (e) {
    // in case: server error
    // yield put({ type: 'API_ERROR' })
  }
}

/*
  Starts uploadStudents on each dispatched `UPLOAD_STUDENTS` action.
*/
function* getProductsSaga() {
  yield takeLatest(Types.GET_PRODUCTS_PROCESSING, getProducts)
}

export default getProductsSaga
