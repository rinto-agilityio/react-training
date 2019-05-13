// Libs
import { fbDatabase } from '@configs/firebase'

// Helpers
import { getListAsArray } from './firebase'

const dbRef = fbDatabase.ref('feeds'),

  /**
   * Wrapp response with status for successful case
   * @param {[array, object]} data - Response data
   * @return {object} - object with success status
   */
  wrapperResponseSuccessful = data => ({
    data,
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
    .catch(err => wrapperResponseFailure(err)),

  /**
   * Add new feed
   * @param {object} feed  Feed content
   * @returns {object} feed
   */
  postNewFeed = feed => {
    // Generate key from firebase
    const feedId = dbRef.push().key

    return dbRef
      .child(feedId)
      .set(feed)
      .then(() => wrapperResponseSuccessful(feed))
      .catch(err => wrapperResponseFailure(err))
  },

  /**
   * // TODO: Find better way to find and get/set data
   * @param {object} data - feedId and userId
   * @returns {bool} status
   */
  postToggleLike = data => {
    const { userId, postId } = data

    dbRef
      .child(`${postId}/likes/${userId}`)
      .once('value')
      .then(snapshot => {
        const newValue = snapshot.val() ? null : userId

        return dbRef.child(`${postId}/likes/${userId}`).set(newValue)
      })
      .then(() => wrapperResponseSuccessful(null))
      .catch(err => wrapperResponseFailure(err))
  },

  /**
   * @param {object} comment - Comment
   * @returns {object} - Dispatch action
   */
  postNewComment = comment => {
    // Generate key from firebase
    const commentId = dbRef.child(`${comment.postId}/comments`).push().key

    return dbRef
      .child(`${comment.postId}/comments/${commentId}`)
      .set(comment)
      .then(() => wrapperResponseSuccessful(comment))
      .catch(err => wrapperResponseFailure(err))
  }

export { getAllFeeds, postNewFeed, postToggleLike, postNewComment }