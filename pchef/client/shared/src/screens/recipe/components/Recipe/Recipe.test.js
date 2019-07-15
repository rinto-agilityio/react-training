// Components
import Recipe from '.'
import Directions from './Directions'
import Direction from './Direction'
import Ingredients from './Ingredients'
import Ingredient from './Ingredient'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import Tag from '../../../../components/Tag'

// Mocks
import { recipes } from '../../../../mocks'

describe('Recipe by step', () => {
  const getRecipe = recipes[0]
  const recipeProps = {
    getRecipe,
    onSelectStep: jest.fn(),
  }

  const recipeComponent = mount(<Recipe {...recipeProps} />)
  const directionsComponent = mount(<Directions onSelectStep={jest.fn()} />)
  const directionComponent = shallow(<Direction onSelectStep={jest.fn()} />)
  const ingredientsComponent = mount(<Ingredients />)
  const ingredientComponent = shallow(<Ingredient />)

  it('Renders correctly recipe commponent', () => {
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    recipeComponent.setProps({
      size: 'medium',
    })
    expect(recipeComponent).toMatchSnapshot()
  })

  it('Renders correctly directions commponent', () => {
    expect(directionsComponent).toMatchSnapshot()
  })

  it('Render directions component with size medium', () => {
    directionsComponent.setProps({
      size: 'medium',
    })
    expect(directionsComponent).toMatchSnapshot()
  })

  it('Render directions component with steps array', () => {
    directionsComponent.setProps({
      steps: getRecipe.steps,
    })
    expect(directionsComponent).toMatchSnapshot()
  })

  it('Renders correctly direction commponent', () => {
    expect(directionComponent).toMatchSnapshot()
  })

  it('Render direction component with size medium', () => {
    directionsComponent.setProps({
      size: 'medium',
    })
    expect(directionComponent).toMatchSnapshot()
  })

  it('Render direction component with step info', () => {
    directionsComponent.setProps({
      item: getRecipe.steps[0],
    })
    expect(directionComponent).toMatchSnapshot()
  })

  it('Renders correctly ingredients commponent', () => {
    expect(ingredientsComponent).toMatchSnapshot()
  })

  it('Render ingredients component with size medium', () => {
    ingredientsComponent.setProps({
      size: 'medium',
    })
    expect(ingredientsComponent).toMatchSnapshot()
  })

  it('Render directions component with recipe description', () => {
    ingredientsComponent.setProps({
      description: getRecipe.description,
    })
    expect(ingredientsComponent).toMatchSnapshot()
  })

  it('Renders correctly ingredient component', () => {
    expect(ingredientComponent).toMatchSnapshot()
  })

  it('Render ingredient component with size medium', () => {
    ingredientComponent.setProps({
      disabled: true,
    })
    expect(ingredientComponent).toMatchSnapshot()
  })

  it('Render ingredient component with text', () => {
    ingredientComponent.setProps({
      item: 'recipe description',
    })
    expect(ingredientComponent).toMatchSnapshot()
  })

  it('Should call onSelectStep at Direction component', () => {
    const props = {
      onSelectStep: jest.fn(),
    }
    const directionComponent = mount(<Direction {...props} />)
    const ButtonComponent = directionComponent.find(Button).props()
    ButtonComponent.onPress()
    expect(props.onSelectStep).toHaveBeenCalled()
  })

  it('Should call onSelectStep at Directions component', () => {
    const props = {
      onSelectStep: jest.fn(),
    }
    const directionsComponent = shallow(<Recipe {...props} />)
    const ButtonComponent = directionsComponent.find(Directions).props()
    ButtonComponent.onSelectStep()
    expect(props.onSelectStep).toHaveBeenCalled()
  })

  it('Navigate to Login page when closing modal after getting server error', () => {
    const recipeProps = {
      ...recipeProps,
      error: {
        graphQLErrors: [{
          message: 'Error!',
        }],
      },
      handleRedirectLogin: jest.fn(),
    }
    const RecipeComponent = shallow(<Recipe {...recipeProps} />)
    const ModalComponent = RecipeComponent.find(Modal).props()
    ModalComponent.onDismiss()
    expect(recipeProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Navigate to Login page when submit modal after getting server error', () => {
    const recipeProps = {
      ...recipeProps,
      error: {
        graphQLErrors: [{
          message: 'Error!',
        }],
      },
      handleRedirectLogin: jest.fn(),
    }
    const RecipeComponent = shallow(<Recipe {...recipeProps} />)
    const ModalComponent = RecipeComponent.find(Modal).props()
    ModalComponent.onSubmit()
    expect(recipeProps.handleRedirectLogin).toHaveBeenCalled()
  })

  it('Render Recipe component with loading true', () => {
    const recipeProps = {
      ...recipeProps,
      loading: true,
    }
    const wishList = renderer.create(<Recipe {...recipeProps} />).toJSON()
    expect(wishList).toMatchSnapshot()
  })

  it('Should call onClose when closing tag item', () => {
    const props = {
      onClose: jest.fn(),
    }
    const ingredientComponent = shallow(<Ingredient {...props} />)
    const TagComponent = ingredientComponent.find(Tag).props()
    TagComponent.onClose()
    expect(props.onClose).toHaveBeenCalled()
  })
})
