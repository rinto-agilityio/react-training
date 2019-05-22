// Mock
import { user, recipes, categories } from '../../mocks'

// Components
import Profile from '.'

const props = {
  data: {
    user,
    followCategory: categories,
    favoriteRecipe: recipes,
  },
  loading: false,
  error: undefined,
}

describe('Screen', () => {
  describe('Profile', () => {
    it('should render Category component with grid', () => {
      const renderComponent = renderer.create(<Profile {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })
  })
})
