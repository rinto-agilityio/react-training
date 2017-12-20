import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  uploadPhotoRequest: ['feed'],
  uploadPhotoCancel: null,
  uploadPhotoSuccess: ['response'],
  uploadPhotoFailure: ['error']
})
