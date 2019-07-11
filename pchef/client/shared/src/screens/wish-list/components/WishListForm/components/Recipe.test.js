// Components
import Recipe from './Recipe'

// Mocks
import { recipes } from '../../../../../mocks'

describe('Recipe', () => {
  let props = {
    recipe: {},
  }
  it('Render correctly recipe component', () => {
    props = {
      recipe: {
        title: recipes[0].title,
        imgUrl: recipes[0].imgUrl,
      },
    }
    const recipe = renderer.create(<Recipe {...props} />).toJSON()
    expect(recipe).toMatchSnapshot()
  })
})
