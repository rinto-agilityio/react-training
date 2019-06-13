export const validator = (fields: {}) => {
  const errorMessage = {
    title: '',
    categoryId: '',
    cookingTypeId: '',
  }

  let isError = false

  Object.keys(fields).forEach(key => {
    const value = fields[key]
    if (!value) {
      errorMessage[key] = 'Required *'
      isError = true
    }
  })

  return {
    errorMessage,
    isError,
  }
}
