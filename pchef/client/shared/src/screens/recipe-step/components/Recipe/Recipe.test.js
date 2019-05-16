// Components
import Recipe from '.'
import ProgressStep from './ProgressStep'

// Mocks
import { recipe } from '../../../../mocks/recipe'

describe('Recipe by step', () => {
  const recipeProps = {
    stepInfo: recipe.steps[0],
    recipe,
    onSelectStep: jest.fn(),
  }
  const stepProps = {
    step: 1,
    onPressStep: jest.fn(),
    onPressSelectStep: jest.fn(),
  }
  const recipeComponent = mount(<Recipe {...recipeProps} />)
  const progressStepComponent = mount(<ProgressStep {...stepProps} />)

  it('renders correctly recipe commponent', () => {
    expect(recipeComponent).toMatchSnapshot()
  })

  it('renders correctly progress steps commponent', () => {
    expect(progressStepComponent).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    recipeComponent.setProps({
      size: 'medium',
    })
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Render progress step component with size medium', () => {
    progressStepComponent.setProps({
      size: 'medium',
    })
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
