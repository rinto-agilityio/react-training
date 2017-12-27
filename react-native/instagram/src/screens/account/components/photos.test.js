// Components
import Photos from './Photos'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('Photos component', () => {
  let treeDOM

  beforeEach(() => {
    treeDOM = renderer.create(<Photos data={photos} />).toJSON()
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })
})
