// Libs
import renderer from 'react-test-renderer'

// Helpers
import { recipe } from '../../../../mocks/recipe'

// Components
import Recipe from '.'

it('renders correctly', () => {
  const component = renderer.create(
    <Recipe
      size="medium"
      recipe={recipe}
    />,
  ).toJSON()

  expect(component).toMatchSnapshot()
});
