// Sagas
import homeSaga from '@screens/home/sagas'
import uploadSaga from '@screens/upload/sagas'
import listChanges from './listen-changes'

/**
 * Saga root for app
 * @returns {object} sagaRoot
 */
export default function* sagaRoot() {
  return yield [
    homeSaga(),
    uploadSaga(),
    listChanges()
  ]
}
