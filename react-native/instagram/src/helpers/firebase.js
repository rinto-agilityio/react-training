/**
 * Convert list object to array
 * Also update structure for item has no likes, no comments
 * Because firebase remove field of empty
 * @param {collection} collection - firebase collection
 * @return {array} items
 */
const getListAsArray = collection => {
  const list = []

  collection.forEach(item => {
    const singleFeed = item.val()

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
