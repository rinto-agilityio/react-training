import homeSaga from '@screens/home/saga'

/**
 * @returns {object} sagaRoot
 */
export default function* sagaRoot() {
  yield [homeSaga()]
}
