/**
 * Format string to array if string contain ,
 * @param {string} description
 * @param {string} separator
 * @return {array} array of string
 */

export const formatStringToArray = (string: string, separator: string) => (
  string.split(separator) // Split string to array by separator
)

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
  index: number,
) => arr.find(item => item.step === index) || defaultValue

/**
 * Compare values send from sort method
 * @param {object} a
 * @param {object} b
 */
export const compareStep = (a: {step: number}, b: {step: number}) => {
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
export const customError = (errorArr: Array<{message: string}>) => {
  let errorMes = ''

  if (errorArr) {
    errorArr.forEach(item => {
      errorMes = item.message
    });
  }

  return errorMes;
};
