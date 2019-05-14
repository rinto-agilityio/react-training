// Libs
import renderer from 'react-test-renderer'

// Components
import TextBox from '.'

it('renders correctly', () => {
  const textbox = renderer.create(
    <TextBox
      placeholder="Multiline"
      multiline
    />,
  ).toJSON()
  expect(textbox).toMatchSnapshot()
});
