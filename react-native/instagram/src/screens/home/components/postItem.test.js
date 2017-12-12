// Components
import PostItem from './PostItem'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('PostItem component', () => {
  let component
  const mockSubmitComment = jest.fn(),
        mockToggleLike = jest.fn(),
        item = photos[0],
        item2 = photos[1] // This data has some likes

  it('Renders correctly without like', () => {
    const treeDOM = renderer.create(
      <PostItem
        item={item}
        submitComment={mockSubmitComment}
        toggleLike={mockToggleLike}
      />
    ).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly like photo', () => {
    const treeDOM = renderer.create(
      <PostItem
        item={item2}
        submitComment={mockSubmitComment}
        toggleLike={mockToggleLike}
      />
    ).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
