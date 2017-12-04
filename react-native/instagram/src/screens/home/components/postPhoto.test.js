import { photos } from '@test/__mocks__/sample-data'
import PostPhoto from './PostPhoto'

describe('PostPhoto component', () => {
  const singlePost = photos[1]

  it('Renders correctly', () => {
    const treeDOM = renderer
      .create(<PostPhoto display_url={singlePost.display_url} />)
      .toJSON()

    expect(treeDOM).toMatchSnapshot()
  })
})
