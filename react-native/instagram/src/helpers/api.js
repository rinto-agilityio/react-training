// Libs
import { fbDatabase } from '@configs/firebase'

// Helpers
import { photos } from '@test/__mocks__/sample-data'
import { getListAsArray } from './firebase'

const dbRef = fbDatabase.ref('feeds'),

  /**
   * Wrapp response with status for successful case
   * @param {[array, object]} response - Response data
   * @return {object} - object with success status
   */
  wrapperResponseSuccessful = response => ({
    response,
    ok: true
  }),

  /**
   * Wrapp response with status for failure case
   * @param {object} error - Response data
   * @return {object} - object with fail status
   */
  wrapperResponseFailure = error => ({
    error,
    ok: false
  }),

  /**
   * Get all feeds
   * @returns {object} - Response with status
   */
  getAllFeeds = () => dbRef
    .once('value')
    .then(snapshot => wrapperResponseSuccessful(getListAsArray(snapshot)))
    .catch(err => wrapperResponseFailure(err))

export { getAllFeeds }
