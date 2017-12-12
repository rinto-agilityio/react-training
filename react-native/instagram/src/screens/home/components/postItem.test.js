// Components
import PostItem from './PostItem'

// Mocking data
import { photos } from '@test/__mocks__/sample-data'

describe('PostItem component', () => {
  let component
  const item = photos[0],
    item2 = photos[1] // This data has some likes

  beforeEach(() => {
    component = shallow(<PostItem item={item} />)
  })

  it('Renders correctly without like', () => {
    const treeDOM = renderer.create(<PostItem item={item} />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders correctly like photo', () => {
    const treeDOM = renderer.create(<PostItem item={item2} />).toJSON()

    expect(treeDOM).toMatchSnapshot()
  })

  it('Change state after click comment icon', () => {
    const initialState = component.state()

    component.instance()._toggleCommentBox()

    expect(initialState.showComment).toEqual(!component.state().showComment)
  })
})
