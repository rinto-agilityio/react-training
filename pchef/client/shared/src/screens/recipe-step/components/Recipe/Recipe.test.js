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

  it('Renders correctly recipe commponent', () => {
    const recipeComponent = renderer.create(<Recipe {...recipeProps} />).toJSON()
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Renders correctly progress steps commponent', () => {
    const progressStepComponent = renderer.create(<ProgressStep {...stepProps} />).toJSON
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    const props = {
      ...recipeProps,
      size: 'medium',
    }
    const recipeComponent = renderer.create(<Recipe {...props} />).toJSON()
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Render progress step component with steps array', () => {
    const props = {
      ...stepProps,
      size: 'medium',
    }
    const progressStepComponent = renderer.create(<ProgressStep {...props} />).toJSON()
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Function props of recipe component should be defined', () => {
    const props = {
      ...recipeProps,
      size: 'medium',
    }

    const recipeComponent = renderer.create(<Recipe {...props} />).toJSON()

    recipeComponent.props.onPress()
    expect(Recipe.props.onPress).toBeDefined()
  })

  it('Function props of progress step component should be defined', () => {
    const props = {
      ...stepProps,
      size: 'medium',
    }
    const ProgressStep = renderer.create(<ProgressStep {...props} />).toJSON()
    ProgressStep.props.onPressStep()
    ProgressStep.props.onPressSelectStep()
    expect(ProgressStep.props.onPressStep).toBeDefined()
    expect(ProgressStep.props.onPressSelectStep).toBeDefined()
  })
})
