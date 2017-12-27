// Libs
import { take, put, fork } from 'redux-saga/effects'
import { eventChannel } from 'redux-saga'

// Helpers
import { fbDatabase } from '@configs/firebase'
import { getListAsArray } from '@helpers/firebase'
import { Types as HomeActionTypes } from '@screens/home/actions'

// Sagas
import homeSaga from '@screens/home/sagas'
import uploadSaga from '@screens/upload/sagas'

/**
 * Listen snapshot value change
 * Update app by dispatch an action get whole data succeed
 * @returns {function} Return function
 */
function createEventChannel() {
  const listener = eventChannel(emit => {
    fbDatabase
      .ref('feeds')
      .on('value', snapshot => emit(snapshot))

    return () => fbDatabase.ref('feeds').off(listener)
  })

  return listener
}

/**
 * Listen firebase event when add new items to 'feeds'
 * @return {function} Dispatch an action to add new item to list
 */
function* updateFeeds() {
  const updateChannel = createEventChannel()

  while (true) {
    const item = yield take(updateChannel)

    if (item) {
      yield put({
        type: HomeActionTypes.GET_HOME_DATA_SUCCESS,
        response: getListAsArray(item)
      })
    }
  }
}

/**
 * @returns {object} sagaRoot
 */
export default function* sagaRoot() {
  return yield [
    homeSaga(),
    uploadSaga(),
    fork(updateFeeds)
  ]
}
