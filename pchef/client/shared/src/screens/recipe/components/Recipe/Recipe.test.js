// Components
import Recipe from '.'

// Mocks
import { recipe } from '../../../../mocks/recipe'

it('renders correctly', () => {
  const recipeDetail = renderer.create(
    <Recipe
      recipe={recipe}
      size="medium"
      onSelectStep={jest.fn()}
    />,
  ).toJSON()

  expect(recipeDetail).toMatchSnapshot()
})
