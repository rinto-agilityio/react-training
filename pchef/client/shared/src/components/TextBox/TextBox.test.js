// Libs
import renderer from 'react-test-renderer'

// Components
import { TextInput } from 'react-native'
import TextBox from '.'

const props = {
  onBlur: jest.fn(),
  onChangeText: jest.fn(),
}

const component = shallow(<TextBox {...props} />)

it('renders correctly', () => {
  const textbox = renderer.create(
    <TextBox
      placeholder="Multiline"
      multiline
    />,
  ).toJSON()
  expect(textbox).toMatchSnapshot()
});

it('should call onBlur when blur on text input', () => {
  const textbox = component.find(TextInput)
  textbox.simulate('blur', {
    target: { value: 'hello' },
  })
  expect(props.onBlur).toHaveBeenCalled()
})

it('should call onChangeText when input text', () => {
  const textbox = component.find(TextInput)
  textbox.props().onChangeText()
  expect(props.onChangeText).toHaveBeenCalled()
})
