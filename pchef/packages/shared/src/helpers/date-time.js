/**
 * Get full date for calendar by format YYYY-MM-DD
 * @param {number} date The number date to format
 * @return {string} Full date with format YYYY-MM-DD
 */
export const getDateForCalendar = (date: number) => {
  const dayFormat = new Date(date)
  const year = dayFormat.getFullYear()
  const month = dayFormat.getMonth() + 1
  const monthFormat = `${month < 10 ? 0 : ''}${month}`
  const day = `${dayFormat.getDate() < 10 ? 0 : ''}${dayFormat.getDate()}`

  return `${year}-${monthFormat}-${day}`
}

/**
 * Getting the date of next week
 * @param {boolean} isGetMonday The param to check is return minDate or maxDate
 * @return {object} The day range includes minDate and maxDate 
 */
export const getDateOfWeek = () => {
  const day = new Date()

  // Get end day of current week
  const endOfWeek = day.setDate(day.getDate() - (day.getDay() - 1) + 6)

  let startOfNextWeek = new Date(endOfWeek)
  // Set start of next week with = end of current week + 1 day
  startOfNextWeek = startOfNextWeek.setDate(startOfNextWeek.getDate() + 1)

  let endOfNextWeek = new Date(startOfNextWeek)
  // Set end of next week with = start of next week + 6 days
  endOfNextWeek = endOfNextWeek.setDate(endOfNextWeek.getDate() + 6)

  return {
    minDate: getDateForCalendar(startOfNextWeek),
    maxDate: getDateForCalendar(endOfNextWeek)
  }
}