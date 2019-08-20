import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  loginWithFirebaseProcessing: ['data'],
  loginWithFirebaseSuccess: null,
  loginWithFirebaseFailed: null,
})

const loginAction = {
  Types,
  Creators,
}

export default loginAction
