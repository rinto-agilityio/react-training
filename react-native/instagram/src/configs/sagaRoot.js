import homeSaga from '@screens/home/sagas'
import uploadSaga from '@screens/upload/sagas'

/**
 * @returns {object} sagaRoot
 */
export default function* sagaRoot() {
  yield [
    homeSaga(),
    uploadSaga()
  ]
}
