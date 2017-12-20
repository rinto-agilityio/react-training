/**
 * Convert list object to array
 * Also update structure:
 * - Set id the same with object key
 * - Set empty array for item has no likes, no comments
 * Because firebase remove field of empty
 * @param {collection} collection - firebase collection
 * @return {array} items
 */
const getListAsArray = collection => {
    const list = []

    collection.forEach(item => {
      const singleFeed = item.val(),
        likeArr = [],
        commentArr = []

      /*
       * Set default empty likes, comments
       * Or convert from collection to array
       */
      if (singleFeed.likes) {
        singleFeed.likes.forEach(userId => {
          likeArr.push(userId)
        })
      }
      if (singleFeed.comments) {
        singleFeed.comments.forEach(comment => {
          commentArr.push(comment)
        })
      }

      singleFeed.id = item.key
      singleFeed.likes = likeArr
      singleFeed.comments = commentArr

      list.push(singleFeed)
    })

    return list
  },

  /**
   * @param {collection} snapshot - Snapshot firebase
   * @returns {array} snapshot array
   */
  snapshotToArray = snapshot => {
    const returnArr = []

    snapshot.forEach(childSnapshot => {
      const item = childSnapshot.val()
      item.key = childSnapshot.key
      returnArr.push(item)
    })

    return returnArr
  }

export { getListAsArray, snapshotToArray }
