// Components
import Recipe from '.'
import ProgressStep from './ProgressStep'

// Mocks
import { recipes, user } from '../../../../mocks'

const recipe = recipes[0]
describe('Recipe by step', () => {
  const recipeProps = {
    stepInfo: recipe.steps[0],
    votes: recipe.votes,
    recipe,
    getUser: {
      favoriteRecipe: user.favoriteRecipe,
      user,
    },
    onSelectStep: jest.fn(),
  }
  const stepProps = {
    step: 1,
    onPressStep: jest.fn(),
    onPressSelectStep: jest.fn(),
  }
  const recipeComponent = renderer.create(<Recipe {...recipeProps} />).toJSON()
  const progressStepComponent = shallow(<ProgressStep {...stepProps} />)

  it('Renders correctly recipe commponent', () => {
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Renders correctly progress steps commponent', () => {
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Render progress step component with steps array', () => {
    progressStepComponent.setProps({
      steps: recipe.steps,
    })
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Function props of recipe component should be defined', () => {
    Recipe.defaultProps.onPress()
    expect(Recipe.defaultProps.onPress).toBeDefined()
  })

  it('Function props of progress step component should be defined', () => {
    ProgressStep.defaultProps.onPressStep()
    ProgressStep.defaultProps.onPressSelectStep()
    expect(ProgressStep.defaultProps.onPressStep).toBeDefined()
    expect(ProgressStep.defaultProps.onPressSelectStep).toBeDefined()
  })
})
