import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  registerWithFirebaseProcessing: ['data'],
  registerWithFirebaseSuccess: null,
  registerWithFirebaseFailed: null,
})

const registerAction = {
  Types,
  Creators,
}

export default registerAction
