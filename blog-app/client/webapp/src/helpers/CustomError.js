export const CustomError = errorArr => {
  let errors = {}
  if (errorArr) {
    errorArr.forEach(item => {
      errors = item.extensions.exception.validationErrors
    })
  }
  return errors
};
