// Components
import Icon from '.'

it('renders correctly', () => {
  const icon = renderer.create(
    <Icon
      name="add-a-photo"
      disabled
    />,
  ).toJSON()

  expect(icon).toMatchSnapshot()
})
