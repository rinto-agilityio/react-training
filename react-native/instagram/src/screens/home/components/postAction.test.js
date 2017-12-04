// Components
import PostAction from './PostAction'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

describe('PostAction component', () => {
  let imageUri, iconLike, iconComment
  const userId = users[0].id,
    postId = photos[0].id,
    mockToogleCommentBox = jest.fn(),
    mockToogleLike = jest.fn()

  beforeEach(() => {
    const component = shallow(
      <PostAction
        userId={userId}
        postId={postId}
        isLiked={false}
        toogleLike={mockToogleLike}
        toogleCommentBox={mockToogleCommentBox}
      />
    )

    iconLike = component.find('TouchableHighlight.icon-like')
    iconComment = component.find('TouchableHighlight.icon-comment')
  })

  it('Renders correctly for new image', () => {
    const treeDOM = renderer
      .create(<PostAction userId={userId} postId={postId} isLiked={false} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly for like image', () => {
    const treeDOM = renderer
      .create(<PostAction userId={userId} postId={postId} isLiked={true} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Should call toogleLike if click on icon like', () => {
    iconLike.simulate('press')

    expect(mockToogleLike.mock.calls.length).toEqual(1)
  })

  it('Should call toogleComment if click on icon like', () => {
    iconComment.simulate('press')

    expect(mockToogleCommentBox.mock.calls.length).toEqual(1)
  })
})
