import { users, photos } from '@test/__mocks__/sample-data'
import Comment from './Comment'

describe('Comment component', () => {
  let component, treeDOM, textInput
  const defaultState = { text: '' },
    postId = photos[0].id,
    owner = users[0],
    mockSubmit = jest.fn()

  beforeEach(() => {
    component = shallow(
      <Comment owner={owner} submitComment={mockSubmit} postId={postId} />
    )
    treeDOM = renderer
      .create(<Comment owner={owner} postId={postId} />)
      .toJSON()

    textInput = component.find('TextInput')
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })

  it('Render default state', () => {
    expect(component.state()).toEqual(defaultState)
  })

  it('Renders input field with placeholder', () => {
    const expectedPlaceholder = 'Add a comment'

    expect(textInput).toHaveLength(1)
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder)
  })

  describe('When text changes', () => {
    const newTextValue = 'new Text Value'

    beforeEach(() => {
      textInput.simulate('changeText', newTextValue)
    })

    it('Updates component state', () => {
      expect(component.state().text).toEqual(newTextValue)
    })

    it.skip('Renders updated text', () => {
      expect(textInput.props().text).toEqual(newTextValue)
    })

    it('Should call submitComment if text change then submit', () => {
      textInput.simulate('submitEditing') // Press enter after change text

      expect(mockSubmit.mock.calls.length).toEqual(1)
    })
  })
})
