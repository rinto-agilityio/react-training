// Components
import Feed from './Feed'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('Feed component', () => {
  const mockSubmitComment = jest.fn(),
    mockToggleLike = jest.fn(),
    item = photos[0],
    item2 = photos[1]

  it('Renders correctly without like', () => {
    const treeDOM = renderer
      .create(
        <Feed
          item={item}
          submitComment={mockSubmitComment}
          toggleLike={mockToggleLike}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly like photo', () => {
    const treeDOM = renderer
      .create(
        <Feed
          item={item2}
          submitComment={mockSubmitComment}
          toggleLike={mockToggleLike}
        />
      )
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
