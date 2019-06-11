export const validator = (fields: {}) => {
  const errorMessage = {
    title: '',
    categoryId: '',
    cookingTypeId: '',
  }

  Object.keys(fields).forEach(key => {
    const value = fields[key]
    if (!value) {
      errorMessage[key] = 'Required'
    }
  })

  return errorMessage
}
