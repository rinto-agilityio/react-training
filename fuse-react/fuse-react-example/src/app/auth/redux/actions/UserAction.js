import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getUserData: ['uid'],
  getUserDataFailed: null,
  setUserData: ['user'],
  showMessage: ['message'],
  logOutUser: null,
})

const userAction = {
  Types,
  Creators,
}

export default userAction
