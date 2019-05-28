/**
 * Format string to array if string contain ,
 * @param {string} description
 * @param {string} separator
 * @return {array} array of string
 */

export const formatStringToArray = (string: string, separator: string) => (
  string.split(separator) // Split string to array by separator
)

/**
 * find info step with index
 * @param {array} arr
 * @param {number} index
 */

export const findStep = (arr: array, index: number) => arr.find(item => item.step === index)

/**
 * Compare values send from sort method
 * @param {object} a
 * @param {object} b
 */
export const compareStep = (a, b) => {
  if (a.step < b.step) {
    return -1;
  }
  if (a.step > b.step) {
    return 1;
  }

  return 0;
}

/**
 * custom graphql error
 * @param {array} errorArr
 */
export const customError = errorArr => {
  let errorMes = ''

  if (errorArr) {
    errorArr.forEach(item => {
      errorMes = item.message
    });
  }

  return errorMes;
};

/**
 * Checking current recipe saved
 */
export const checkFavorited = (arr: Array<string>, currentId: string) => (
  arr.findIndex(item => item.id === currentId) === -1 ? false : true
)

/**
 * format favoriteRecipe
 */
export const formatFavoriteRecipe = (arr: Array<{id: string}>) => (
  arr.map(item => item.id)
)
