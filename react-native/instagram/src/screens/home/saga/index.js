// Libs
import { takeLatest } from 'redux-saga/effects'
import { Types } from '../actions'

const getHomeDataRequest = () => {
  console.log('Saga Test: GET_HOME_DATA_REQUEST')

  return true
}

export default function* homeSaga() {
  return yield [takeLatest(Types.GET_HOME_DATA_REQUEST, getHomeDataRequest)]
}
