// Components
import PostAction from './PostAction'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

describe('PostAction component', () => {
  let imageUri, iconLike, iconComment
  const userId = users[0].id,
    postId = photos[0].id,
    mocktoggleCommentBox = jest.fn(),
    mocktoggleLike = jest.fn()

  beforeEach(() => {
    const component = shallow(
      <PostAction
        userId={userId}
        postId={postId}
        isLiked={false}
        toggleLike={mocktoggleLike}
        toggleCommentBox={mocktoggleCommentBox}
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

  it('Should call toggleLike if click on icon like', () => {
    iconLike.simulate('press')

    expect(mocktoggleLike.mock.calls.length).toEqual(1)
  })

  it('Should call toggleComment if click on icon like', () => {
    iconComment.simulate('press')

    expect(mocktoggleCommentBox.mock.calls.length).toEqual(1)
  })
})
