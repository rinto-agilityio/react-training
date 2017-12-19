/**
 * Convert list object to array
 * @param {collection} collection - firebase collection
 * @return {array} items
 */
const getListAsArray = collection => {
  const list = []

  collection.forEach(item => {
    list.push(item.val())
  })

  return list
}

export { getListAsArray }
