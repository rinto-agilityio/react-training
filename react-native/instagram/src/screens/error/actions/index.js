// Libs
import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  addError: ['error'],
  clearError: null
})
