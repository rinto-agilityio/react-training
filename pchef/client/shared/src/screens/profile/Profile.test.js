// Libs
import { MockedProvider } from 'react-apollo/test-utils'

// Mock
import { user, recipes, categories } from '../../mocks'

// Components
import Profile from '.'

describe('Screen', () => {
  describe('Profile', () => {
    let props
    const initProps = {
      data: {
        user,
        followCategory: categories,
        favoriteRecipe: recipes,
      },
      loading: false,
    }

    beforeEach(() => { props = initProps })
    afterEach(() => { props = initProps })

    it('should render Category component with grid', () => {
      const renderComponent = renderer.create(<MockedProvider><Profile {...props} /></MockedProvider>)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render Loading component when query is loading', () => {
      props = {
        ...props,
        loading: true,
      }
      const renderComponent = renderer.create(
        <MockedProvider><Profile {...props} /></MockedProvider>,
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render Error when query failed', () => {
      props = {
        ...props,
        error: 'Failed!',
      }

      const renderComponent = renderer.create(
        <MockedProvider><Profile {...props} /></MockedProvider>,
      )

      expect(renderComponent).toMatchSnapshot()
    })
  })
})
