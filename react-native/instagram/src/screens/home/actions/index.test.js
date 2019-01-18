// Libs
import { Types, Creators } from './'

// Mocking data
import { comments } from '@test/__mocks__/sample-data'

describe('Home actions', () => {
  const mockComment = comments[0]

  it('Return correct action type for getHomeDataRequest', () => {
    const expectAction = { type: Types.GET_HOME_DATA_REQUEST }

    expect(Creators.getHomeDataRequest()).toEqual(expectAction)
  })

  it('Return correct action type and comment for addCommentRequest', () => {
    const comment = {
        postId: mockComment.postId,
        owner: mockComment.owner,
        text: mockComment.text
      },
      expectAction = {
        type: Types.ADD_COMMENT_REQUEST,
        comment
      }

    expect(Creators.addCommentRequest(comment)).toEqual(expectAction)
  })

  it('Return correct action type and data for toggleLike', () => {
    const data = {
        postId: mockComment.postId,
        userId: mockComment.owner.id
      },
      expectAction = {
        type: Types.TOGGLE_LIKE,
        data
      }

    expect(Creators.toggleLike(data)).toEqual(expectAction)
  })
})
