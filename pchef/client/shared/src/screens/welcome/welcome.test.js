// Libs
import wait from 'waait'

// Components
import Welcome from '.'
import Error from '../../components/Error'
import Modal from '../../components/Modal'
import Button from '../../components/Button'
import { categories } from '../../mocks'

describe('Welcome', () => {
  it('Render Welcome component with categories empty', () => {
    const component = renderer.create(<Welcome />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Render Welcome component with loading true', () => {
    const props = {
      categories,
      loading: true,
    }

    const primaryComponent = renderer.create(<Welcome {...props} type="primary" />).toJSON()
    expect(primaryComponent).toMatchSnapshot()
    const secondaryComponent = renderer.create(<Welcome {...props} type="secondary" />).toJSON()
    expect(secondaryComponent).toMatchSnapshot()
  })

  it('Render Welcome component with error', () => {
    const props = {
      categories,
      loading: false,
      error: {
        graphQLErrors: [{ message: 'Error!' }],
      },
    }

    const component = renderer.create(<Welcome {...props} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Render Welcome component with data', () => {
    const props = {
      categories,
      loading: false,
      error: null,
      data: {
        followCategory: categories.splice(0, 4),
      },
    }

    const component = renderer.create(<Welcome {...props} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('Render Welcome component with missingCategory', () => {
    const props = {
      categories,
      loading: false,
      error: null,
      data: {
        followCategory: categories.splice(0, 1),
      },
    }

    const component = renderer.create(<Welcome {...props} />).toJSON()

    expect(component).toMatchSnapshot()
  })

  it('HandleSkipCategories action should be called when user press skip button', () => {
    const props = {
      customStyle: {},
      handleSkipCategories: jest.fn(),
      categories,
    }

    const component = shallow(<Welcome {...props} />)

    component
      .find('TouchableOpacity')
      .at(0)
      .props()
      .onPress()
    expect(props.handleSkipCategories).toHaveBeenCalled()
  })

  it('Render defaultProps function', () => {
    Welcome.defaultProps.handleSkipCategories()
    expect(Welcome.defaultProps.handleSkipCategories).toBeDefined()
  })

  it('Call userToggleCategory when user toggle category', async () => {
    const props = {
      categories,
      loading: false,
      error: null,
      userToggleCategory: () => new Promise(resolve => {
        resolve({ data: {
          userToggleCategory: {
            results: [categories[0].id],
          },
        } })
      }),
    }

    const component = shallow(<Welcome {...props} />)

    expect(component.find('InterestedCategories').props().activeList.length).toEqual(0)

    // press category
    component.find('InterestedCategories').props().onChooseCategory()
    await wait()
    expect(component.find('InterestedCategories').props().activeList.length).toEqual(1)

    // press category again
    component.find('InterestedCategories').props().onChooseCategory()
    await wait()
    expect(component.find('InterestedCategories').props().activeList.length).toEqual(0)
  })

  it('Should render Error component if return error', async () => {
    const props = {
      categories,
      loading: false,
      userToggleCategory: jest.fn(),
      handleRedirectLogin: jest.fn(),
    }
    const component = shallow(<Welcome {...props} />)
    component.setProps({ error: { graphQLErrors: [{ message: 'Error!' }] } })
    await wait()
    expect(component.find(Error).exists()).toEqual(true)
  })

  it('Should call handleRedirectLogin when trigger onDismiss on modal', async () => {
    const props = {
      categories,
      loading: false,
      userToggleCategory: jest.fn(),
      handleRedirectLogin: jest.fn(),
    }
    const component = shallow(<Welcome {...props} />)
    component.setProps({ error: { graphQLErrors: [{ message: 'error' }] } })
    const modal = component.find(Modal)

    modal.props().onDismiss()
    expect(props.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Should call handleRedirectLogin when trigger onSubmit on modal', async () => {
    const props = {
      categories,
      loading: false,
      userToggleCategory: jest.fn(),
      handleRedirectLogin: jest.fn(),
    }
    const component = shallow(<Welcome {...props} />)
    component.setProps({ error: { graphQLErrors: [{ message: 'error' }] } })
    const modal = component.find(Modal)

    modal.props().onSubmit()
    expect(props.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Should call userToggleCategory when click on Save Category', async () => {
    const props = {
      categories,
      loading: false,
      userToggleCategory: jest.fn(),
    }
    const component = shallow(<Welcome {...props} />)
    const Buttoncomponent = component.find(Button).props()
    Buttoncomponent.onPress()
    expect(props.userToggleCategory).toHaveBeenCalled()
  })
})
