const { find, filter, concat } = require('lodash')

/**
 * Add/remove item in array
 * @param {Array} collection
 * @param {string} item
 * @return {Array} results
 */
const toggleItemInArray = (collection, value) => {
  let results

  if (find(collection, item => item === value)) {
    results = filter(collection, item => item !== value)
  } else if (collection && collection.length) {
    results = concat(collection, [value])
  } else {
    // Collection is empty
    results = [value]
  }

  return results
}

const findItemInArray = (collection, value) => (
  find(collection, item => item === value)
)

module.exports = {
  toggleItemInArray,
  findItemInArray,
}
