// Components
import Reaction from '.'

it('renders correctly', () => {
  const reaction = renderer.create(
    <Reaction
      votes={[1]}
      size="medium"
      isFavorited
    />,
  ).toJSON()

  expect(reaction).toMatchSnapshot()
})
