// Components
import Recipe from '.'
import Loading from '../../../../components/Loading'
import Errors from '../../../../components/Error'
import Modal from '../../../../components/Modal'
import Reaction from '../../../../components/Reaction'

// Mocks
import { recipes, user } from '../../../../mocks'

const recipe = recipes[0]

describe('Recipe by step', () => {
  const recipeProps = {
    recipeSteps: recipe.steps,
    getUser: {
      favoriteRecipe: user.favoriteRecipe,
      user,
    },
    onSelectStep: jest.fn(),
    getRecipe: recipe,
    onPress: jest.fn(),
    handleRedirectLogin: jest.fn(),
    userToggleVote: jest.fn(),
    userToggleRecipe: jest.fn(),
  }

  let recipeComponent

  beforeEach(() => {
    recipeComponent = shallow(<Recipe {...recipeProps} />)
  })

  it('Renders correctly recipe commponent', () => {
    const recipeComponent = renderer
      .create(<Recipe {...recipeProps} />)
      .toJSON()
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    const props = {
      ...recipeProps,
      size: 'medium',
    }
    const recipeComponent = renderer.create(<Recipe {...props} />).toJSON()
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Should render Loading if request is loading', () => {
    recipeComponent.setProps({ loading: true })
    expect(recipeComponent.find(Loading)).toHaveLength(1)
  })

  it('Should render Error if request is error', () => {
    recipeComponent.setProps({
      error: { graphQLErrors: [{ message: 'error' }] },
    })
    expect(recipeComponent.find(Errors)).toHaveLength(1)
  })

  it('Should call onPress when press on Title', () => {
    recipeComponent
      .find('Text')
      .at(1)
      .props()
      .onPress()
    expect(recipeProps.onPress).toHaveBeenCalled()
  })

  it('Should call handleRedirectLogin when trigger onDismiss on Modal', () => {
    recipeComponent.setProps({
      error: { graphQLErrors: [{ message: 'error' }] },
    })

    const modal = recipeComponent.find(Modal)
    modal.props().onDismiss()
    expect(recipeProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Should call handleRedirectLogin when trigger onSubmit on Modal', () => {
    recipeComponent.setProps({
      error: { graphQLErrors: [{ message: 'error' }] },
    })

    const modal = recipeComponent.find(Modal)
    modal.props().onSubmit()
    expect(recipeProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Should call userToggleVote when press on vote', () => {
    const reaction = recipeComponent.find(Reaction)
    reaction.props().onPressVote()
    expect(recipeProps.userToggleVote).toHaveBeenCalled()
  })

  it('Should call userToggleRecipe when press on favorite', () => {
    const reaction = recipeComponent.find(Reaction)
    reaction.props().onPressFavorite()
    expect(recipeProps.userToggleRecipe).toHaveBeenCalled()
  })
})
