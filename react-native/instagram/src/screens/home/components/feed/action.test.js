// Components
import PostAction from './Action'

// Mocking data
import { users, photos } from '@test/__mocks__/sample-data'

describe('PostAction component', () => {
  let iconLike
  const mocktoggleLike = jest.fn(),
    userId = users[0].id,
    postId = photos[0].id

  beforeEach(() => {
    const component = shallow(
      <PostAction
        userId={userId}
        postId={postId}
        isLiked={false}
        toggleLike={mocktoggleLike}
      />
    )

    iconLike = component.find('TouchableHighlight.icon-like')
  })

  it('Renders correctly for new image', () => {
    const treeDOM = renderer
      .create(
        <PostAction
          userId={userId}
          postId={postId}
          isLiked={false}
          toggleLike={mocktoggleLike}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly for like image', () => {
    const treeDOM = renderer
      .create(
        <PostAction
          userId={userId}
          postId={postId}
          isLiked
          toggleLike={mocktoggleLike}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Should call toggleLike if click on icon like', () => {
    const mockingCallCount = 1

    iconLike.simulate('press')

    expect(mocktoggleLike.mock.calls.length).toEqual(mockingCallCount)
  })
})
