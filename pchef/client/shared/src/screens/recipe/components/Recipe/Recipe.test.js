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

it('renders correctly', () => {
  const recopeDetail = mount(
    <Recipe
      recipe={recipe}
      size="medium"
      onSelectStep={jest.fn()}
    />,
  )
  console.log(recopeDetail.defaultProps)
})
