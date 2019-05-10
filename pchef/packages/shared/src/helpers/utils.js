/**
 * Format string to array if string contain ,
 * @param {string} description
 * @return {array} array of string
 */
export const formatStringToArray = (string: string) => string
  .replace(/,/g, '<br/>') // Replace , to <br/>
  .split('<br/>') // Split string to array by <br/>

/**
 * Trim string
 * @param {string} string
 * @return {string} string after trim
 */
export const trim = (string: string) => (
  string ? string.trim() : ''
)
