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
    let component

    beforeEach(() => {
      component = shallow(<Profile {...props} />)
    })

    it('should render Category component with grid', () => {
      const renderComponent = renderer.create(<Profile {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render Loading component when query is loading', () => {
      component.setProps({ loading: true })
      expect(component.find('Loading')).toHaveLength(1)
    })

    it('should render Error when query failed', () => {
      component.setProps({ error: 'Failed' })
      expect(component.find('Error')).toHaveLength(1)
    })
  })
})
