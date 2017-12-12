// Components
import PostPhoto from './Photo'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('PostPhoto component', () => {
  const singlePost = photos[1]

  it('Renders correctly', () => {
    const treeDOM = renderer
      .create(<PostPhoto display_url={singlePost.display_url} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
