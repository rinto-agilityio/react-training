import { users, photos } from '@test/__mocks__/sample-data'
import Comment from './Comment'

describe('Comment component', () => {
  let component, treeDOM, textInput
  const postId = photos[0].id,
    owner = users[0],
    mockSubmitComment = jest.fn()

  beforeEach(() => {
    component = shallow(
      <Comment
        owner={owner}
        postId={postId}
        submitComment={mockSubmitComment}
      />
    )
    treeDOM = renderer
      .create(
        <Comment
          owner={owner}
          postId={postId}
          submitComment={mockSubmitComment}
        />
      )
      .toJSON()

    textInput = component.find('TextInput')
  })

  it('Renders correctly', () => {
    expect(treeDOM).toMatchSnapshot()
  })

  it('Renders input field with placeholder', () => {
    const expectedPlaceholder = 'Add a comment'

    expect(textInput).toHaveLength(1)
    expect(textInput.props().placeholder).toEqual(expectedPlaceholder)
  })

  // Can't mock ref for TextInput
  it.skip('Should not call submitComment if text is empty', () => {
    // Press enter to submit text
    textInput.simulate('submitEditing')

    expect(mockSubmitComment.mock.calls.length).toEqual(0)
  })

  describe('When text changes', () => {
    const newTextValue = 'new Text Value'

    beforeEach(() => {
      textInput.simulate('changeText', newTextValue)
    })

    // Can't change/or get value of textInput element
    it.skip('Renders updated text', () => {
      expect(textInput.props().value).toEqual(newTextValue)
    })

    it.skip('Should call submitComment if text change then submit', () => {
      // Press enter after change text
      textInput.simulate('submitEditing')

      expect(mockSubmitComment.mock.calls.length).toEqual(1)
    })
  })
})
