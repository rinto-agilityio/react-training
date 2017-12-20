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
    const singleFeed = item.val()

    // Update id the same with key on firebase database
    singleFeed.id = item.key

    // Set default likes, comments
    if (!singleFeed.likes) {
      singleFeed.likes = []
    }

    if (!singleFeed.comments) {
      singleFeed.comments = []
    }

    list.push(singleFeed)
  })

  return list
}

export { getListAsArray }
