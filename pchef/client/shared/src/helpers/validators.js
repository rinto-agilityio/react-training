export const validator = (fields: {}) => {
  const errorMessage = {}

  Object.keys(fields).forEach(key => {
    const value = fields[key]
    if (!value) {
      errorMessage[key] = 'Required'
    }
  })

  return errorMessage
}
