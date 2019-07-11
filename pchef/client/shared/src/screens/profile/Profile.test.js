// Libs
import { MockedProvider } from 'react-apollo/test-utils'
import { act } from 'react-dom/test-utils'

// Mock
import { user, recipes, categories, localStorageMock } from '../../mocks'

// Components
import Profile from '.'
import Modal from '../../components/Modal'
import Setting from '../settings'
import Header from './components/Header'

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
      handleRedirectLogin: jest.fn(),
    }

    beforeEach(() => {
      props = initProps
    })
    afterEach(() => {
      props = initProps
    })

    it('Should render Category component with grid', () => {
      const renderComponent = renderer.create(
        <MockedProvider>
          <Profile {...props} />
        </MockedProvider>
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Loading component when query is loading', () => {
      props = {
        ...props,
        loading: true,
      }
      const renderComponent = renderer.create(
        <MockedProvider>
          <Profile {...props} />
        </MockedProvider>
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Error when query failed', () => {
      props = {
        ...props,
        error: { graphQLErrors: [{ message: 'error' }] },
      }

      const renderComponent = renderer.create(
        <MockedProvider>
          <Profile {...props} />
        </MockedProvider>
      )

      expect(renderComponent).toMatchSnapshot()
    })

    it('Should call handleRedirectLogin when trigger onDismiss on Modal', () => {
      props = {
        ...props,
        error: { graphQLErrors: [{ message: 'error' }] },
      }

      let wrapper

      act(() => {
        wrapper = mount(
          <MockedProvider>
            <Profile {...props} />
          </MockedProvider>
        )
        wrapper
          .find(Modal)
          .props()
          .onDismiss()
      })

      expect(props.handleRedirectLogin).toHaveBeenCalled()
    })

    it('Should call handleRedirectLogin when trigger onSubmit on Modal', () => {
      props = {
        ...props,
        error: { graphQLErrors: [{ message: 'error' }] },
      }

      let wrapper

      act(() => {
        wrapper = mount(
          <MockedProvider>
            <Profile {...props} />
          </MockedProvider>
        )
        wrapper
          .find(Modal)
          .props()
          .onSubmit()
      })

      expect(props.handleRedirectLogin).toHaveBeenCalled()
    })

    it('Should call handleRedirectLogin when press logout on setting', () => {
      let wrapper

      act(() => {
        wrapper = mount(
          <MockedProvider>
            <Profile {...props} store={localStorageMock} />
          </MockedProvider>
        )

        wrapper
          .find(Header)
          .props()
          .handleToSetting()
      })

      act(() => {
        wrapper.update()
        wrapper
          .find(Setting)
          .props()
          .handleLogout()
      })

      expect(props.handleRedirectLogin).toHaveBeenCalled()
    })
  })
})
