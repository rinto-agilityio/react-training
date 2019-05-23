// Components
import Indicator from '.'

it('renders correctly', () => {
  const indicator = renderer.create(
    <Indicator />,
  ).toJSON()

  expect(indicator).toMatchSnapshot()
})
