import { Platform } from 'react-native'

// Components
import NewFeed from '.'
import Modal from '../../components/Modal'
import Loading from '../../components/Loading'
import Header from '../../components/Header'

// Mocks
import { categories, user, recipes } from '../../mocks'

const mockPlatform = OS => {
  jest.resetModules()
  jest.doMock('Platform', () => ({ OS, select: objs => objs[OS] }))
}

const props = {
  handleNavigateWelcome: jest.fn(),
  data: {
    favoriteRecipe: [{ id: '123' }],
    followCategory: [{ ...categories[0], recipes }],
    user,
  },
  userToggleRecipe: jest.fn(),
  userToggleVote: jest.fn(),
  handleClickRecipe: jest.fn(),
  handleRedirectLogin: jest.fn(),
  onPressCategoryPipeline: jest.fn(),
}

let component

describe('NewFeed', () => {
  beforeEach(() => {
    component = shallow(<NewFeed {...props} />)
  })

  it('Should render component', () => {
    const component = renderer.create(<NewFeed {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('Should call handleRedirectLogin when dismiss or submit on modal', () => {
    component.setProps({
      error: {
        graphQLErrors: [{ message: 'error' }],
      },
    })

    const modal = component.find(Modal)
    modal.props().onDismiss()
    expect(props.handleRedirectLogin).toHaveBeenCalled()

    modal.props().onSubmit()
    expect(props.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Should render Loading component if loading is true', () => {
    component.setProps({
      loading: true,
    })

    expect(component.find(Loading)).toHaveLength(1)
  })
})
