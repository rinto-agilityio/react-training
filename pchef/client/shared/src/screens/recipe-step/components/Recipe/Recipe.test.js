// Components
import Recipe from '.'
import ProgressStep from './ProgressStep'
import Button from '../../../../components/Button'

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
  }

  const stepProps = {
    steps: recipe.steps,
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

  it('Should call onPress when press on Title', () => {
    const recipeComponent = shallow(<Recipe {...recipeProps} />)
    recipeComponent.find('Text').at(1).props().onPress()
    expect(recipeProps.onPress).toHaveBeenCalled()
  })

  it('Should call onPressStep when press on Button of ProgressStep', () => {
    const props = {
      ...stepProps,
      size: 'medium',
    }
    const progressStep = shallow(<ProgressStep {...props} />)
    progressStep.find(Button).at(0).props().onPress()
    expect(stepProps.onPressStep).toHaveBeenCalled()
  })
})
