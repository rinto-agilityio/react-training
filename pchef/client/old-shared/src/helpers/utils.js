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
 * Trim string
 * @param {string} string
 * @return {string} string after trim
 */
export const trim = (string: string) => (
  string ? string.trim() : ''
)
