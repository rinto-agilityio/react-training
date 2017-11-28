import { users, photos } from '../../../test/__mocks__/sample-data'
import PostAction from './PostAction'

describe('PostAction component', () => {
  let imageUri, iconLike, iconComment
  const userId = users[0].id,
    postId = photos[0].id,
    mockToogleComment = jest.fn(),
    mockToogleLike = jest.fn()

  beforeEach(() => {
    const component = shallow(
      <PostAction
        userId={userId}
        postId={postId}
        liked={false}
        toogleLike={mockToogleLike}
        toogleComment={mockToogleComment}
      />
    )

    iconLike = component.find('TouchableHighlight.icon-like')
    iconComment = component.find('TouchableHighlight.icon-comment')
  })

  it('Renders correctly for new image', () => {
    const treeDOM = renderer
      .create(<PostAction userId={userId} postId={postId} liked={false} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly for like image', () => {
    const treeDOM = renderer
      .create(<PostAction userId={userId} postId={postId} liked={true} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Should call toogleLike if click on icon like', () => {
    iconLike.simulate('press')

    expect(mockToogleLike.mock.calls.length).toEqual(1)
  })

  it('Should call toogleComment if click on icon like', () => {
    iconComment.simulate('press')

    expect(mockToogleComment.mock.calls.length).toEqual(1)
  })
})
