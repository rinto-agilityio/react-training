import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  uploadPhotoRequest: null,
  uploadPhotoCancel: null,
  uploadPhotoSuccess: ['response'],
  uploadPhotoFailure: ['error']
})
