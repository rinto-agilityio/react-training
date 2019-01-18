// Components
import PostFooter from './Footer'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('PostFooter component', () => {
  const emptyArrayLength = 0,
    singlePost = photos[1],
    defaultShowComment = false,
    mockSubmitComment = jest.fn(),
    mocktoggleLike = jest.fn(),
    mocktoggleCommentBox = jest.fn()

  it('Renders correctly without comment input', () => {
    const treeDOM = renderer
      .create(
        <PostFooter
          isLiked={singlePost.likes.length > emptyArrayLength}
          postId={singlePost.id}
          likeCounting={singlePost.likes.length}
          comments={singlePost.comments}
          owner={singlePost.owner}
          showComment={defaultShowComment}
          submitComment={mockSubmitComment}
          toggleLike={mocktoggleLike}
          toggleCommentBox={mocktoggleCommentBox}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly with comment input', () => {
    const treeDOM = renderer
      .create(
        <PostFooter
          isLiked={singlePost.likes.length > emptyArrayLength}
          postId={singlePost.id}
          likeCounting={singlePost.likes.length}
          comments={singlePost.comments}
          owner={singlePost.owner}
          showComment={!defaultShowComment}
          submitComment={mockSubmitComment}
          toggleLike={mocktoggleLike}
          toggleCommentBox={mocktoggleCommentBox}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
