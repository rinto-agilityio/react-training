import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  getHomeDataRequest: null,
  getHomeDataSuccess: ['response'],
  getHomeDataFailure: ['error'],

  addComment: ['comment'],
  addCommentSuccess: ['response'],
  addCommentFailure: ['error'],

  toggleLike: ['data']
})
