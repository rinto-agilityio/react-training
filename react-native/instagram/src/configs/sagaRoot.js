import homeSaga from '@screens/home/sagas'

/**
 * @returns {object} sagaRoot
 */
export default function* sagaRoot() {
  yield [homeSaga()]
}
