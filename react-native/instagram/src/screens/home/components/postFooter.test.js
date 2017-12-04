import { photos } from '@test/__mocks__/sample-data'
import PostFooter from './PostFooter'

describe('PostFooter component', () => {
  const singlePost = photos[1],
    mockshowComment = jest.fn(),
    mockSubmitComment = jest.fn(),
    mockToogleLike = jest.fn(),
    mockToogleCommentBox = jest.fn()

  it('Renders correctly', () => {
    const treeDOM = renderer
      .create(
        <PostFooter
          isLiked={singlePost.likes.length > 0 ? true : false}
          postId={singlePost.id}
          likeCounting={singlePost.likes.length}
          comments={singlePost.comments}
          owner={singlePost.owner}
          showComment={mockshowComment}
          submitComment={mockSubmitComment}
          toogleLike={mockToogleLike}
          toogleCommentBox={mockToogleCommentBox}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
