import { Platform } from 'react-native'
/**
 * Format string to array if string contain ,
 * @param {string} description
 * @param {string} separator
 * @return {array} array of string
 */

export const formatStringToArray = (string: string, separator: string) =>
  string.split(separator) // Split string to array by separator

// init default value for stepInfo
const defaultValue = {
  description: '',
  imgUrl: '',
  step: 1,
  title: '',
}

/**
 * find info step with index
 * @param {array} arr
 * @param {number} index
 */

export const findStep = (
  arr: Array<{
    description: string,
    imgUrl: string,
    step: number,
    title: string,
  }>,
  index: number
) => arr.find(item => item.step === index) || defaultValue

/**
 * Compare values send from sort method
 * @param {object} a
 * @param {object} b
 */
export const compareStep = (a: {step: number}, b: {step: number}) => {
  if (a.step < b.step) {
    return -1
  }
  if (a.step > b.step) {
    return 1
  }

  return 0
}

/**
 * custom graphql error
 * @param {array} errorArr
 */
export const customError = (errorArr: Array<{message: string}>) => {
  let errorMes = ''

  if (errorArr) {
    errorArr.forEach(item => {
      errorMes = item.message
    })
  }

  return errorMes
}

/**
 * Checking contain item in array
 */
export const checkContainField = (arr: Array<{id: string}>, currentId: string) => (
  arr.findIndex(item => item.id === currentId || item === currentId) !== -1
)

/**
 * Format favorite recipe get from getUser query
 * @param {Array} arr
 */
export const formatFavoriteRecipe = (arr: Array<{id: string}>) => {
  const newArr: Array<string> = arr.map((item: {id:string}) => item.id)
  return newArr
}

/**
 * Format favorite recipe returned from userToggleSave mutation
 * @param {Array} arr
 */
export const formatFiledOnObject = (arr: Array<string>, typename?: string) => {
  const newArr: Array<{id: string}> = arr.map(item => (
    Object.assign({id: item, __typename: typename || 'Recipe'})
  ))
  return newArr
}

/**
 * Merge arrays object
 * @param {Array} array1
 * @param {Array} array2
 */

type Item = {
  id: string,
  title: string,
  imgUrl: string,
  description: string,
  votes: Array<string>,
}

export const mergeArrayObject = (array1: Array<Item>, array2: Array<Item>) => {
  const allRecipes = array1.concat(array2)

  const newArray = allRecipes.reduce((array, current) => {
    if (!array.some(item => item.id === current.id)) {
      array.push(current)
    }
    return array
  }, [])

  return newArray
}

/**
 * Get value of text box by platform
 * @param {RefElement} current
 */
export const getValueTextBox = current => {
  if (current) {
    const value = Platform.OS === 'web' ? current._node.value : current._lastNativeText
    return value ? value.trim() : ''
  }
}

/**
 * Updated item on array with id
 * @param {array} arr
 * @param {string} id
 * @param {object} results
 */
export const updateArrayById = (arr: Array<Item>, id: string, results: Object) => {
  const newArr: Array<Item> = arr.map(item => (
    item.id === id ? { ...item, votes: results } : item
  ))

  return newArr
}

/**
 * Checking contain item in array
 */
export const checkContain = (arr: Array<string>, currentId: string) => arr.findIndex(item => item === currentId) !== -1

/**
 * Sort recipes by top votes
*/
export const sortRecipes = (recipes: Array<Item>) => {
  const newList: Array<Item> = recipes.sort((a, b) => b.votes.length - a.votes.length)
  return newList
}
