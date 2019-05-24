// Libs
import wait from 'waait'

// Components
import RecipeForm from '.'
import DirectionsForm from './DirectionForm'
import IngredientsForm from './IngredientsForm'
import Classify from './Classify'

// Mocks
import { categories } from '../../../../mocks/categories'

describe('recipe form', () => {
  const recipeProps = {
    recipre: {
      id: '1',
    },
  }
  let classifyProps = {}

  it('Renders correctly recipe form commponent', () => {
    const recipe = renderer.create(<RecipeForm />).toJSON()
    expect(recipe).toMatchSnapshot()
  })

  it('Render recipe form component with size medium', () => {
    const props = {
      size: 'medium',
    }
    const recipe = renderer.create(<RecipeForm {...props} />).toJSON()
    expect(recipe).toMatchSnapshot()
  })

  it('Render recipe form component with defaultProps', () => {
    const recipe = renderer.create(<RecipeForm />).toJSON()
    expect(recipe).toMatchSnapshot()
  })

  it('Render recipe form component with defaultProps function', () => {
    RecipeForm.defaultProps.handleAddRecipeImage()
    expect(RecipeForm.defaultProps.handleAddRecipeImage).toBeDefined()
  })

  it('Should show ingredients form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    expect(recipe.find('IngredientsForm').exists()).toEqual(false)
    icon.at(3).props().onPress()
    expect(recipe.find('IngredientsForm').exists()).toEqual(true)

    // Submit Ingredients Form
    const ingredientsProps = recipe.find('IngredientsForm').props()
    ingredientsProps.handleSubmitIngredients('test')
    expect(recipe.find('IngredientsForm').exists()).toEqual(false)
  })

  it('Should show directions form', () => {
    const recipe = shallow(<RecipeForm {...recipeProps} />)
    const icon = recipe.find('Icon')
    expect(recipe.find('Apollo(DirectionsForm)').exists()).toEqual(false)
    icon.at(4).props().onPress()
    expect(recipe.find('Apollo(DirectionsForm)').exists()).toEqual(true)

    // Submit Directions Form
    const directionProps = recipe.find('Apollo(DirectionsForm)').props()
    directionProps.onDismiss()
    expect(recipe.find('Apollo(DirectionsForm)').exists()).toEqual(false)
  })

  it('Should hide ingredients form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    icon.at(3).props().onPress()
    recipe.find('IngredientsForm').props().onDismiss()
    expect(recipe.find('IngredientsForm').exists()).toEqual(false)
  })

  it('Should hide directions form', () => {
    const recipe = shallow(<RecipeForm {...recipeProps} />)
    const icon = recipe.find('Icon')
    icon.at(4).props().onPress()
    recipe.find('Apollo(DirectionsForm)').props().onDismiss()
    expect(recipe.find('Apollo(DirectionsForm)').exists()).toEqual(false)
  })

  it('Renders correctly ingredients form commponent', () => {
    const ingredients = renderer.create(<IngredientsForm />).toJSON()
    expect(ingredients).toMatchSnapshot()
  })

  it('Renders correctly ingredients form commponent with size medium', () => {
    const ingredients = renderer.create(<IngredientsForm props={{ size: 'medium' }} />).toJSON()
    expect(ingredients).toMatchSnapshot()
  })

  it('Function handleSubmitIngredients to be called if user press done button', () => {
    const props = {
      handleSubmitIngredients: jest.fn(),
    }
    const ingredients = shallow(<IngredientsForm {...props} />)
    ingredients.find('Modal').props().onSubmit()
    expect(props.handleSubmitIngredients).toHaveBeenCalled()
  })

  it('Render ingredients form component with defaultProps function', () => {
    IngredientsForm.defaultProps.onDismiss()
    expect(IngredientsForm.defaultProps.onDismiss).toBeDefined()
  })

  it('Renders correctly directions form commponent', () => {
    const directions = renderer.create(<DirectionsForm />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent with size medium', () => {
    const directions = renderer.create(<DirectionsForm props={{ size: 'medium' }} />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent with size large', () => {
    const directions = renderer.create(<DirectionsForm props={{ size: 'large' }} />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent when click add more step', () => {
    const directions = shallow(<DirectionsForm />)
    directions.find('Icon').last().props().onPress()
    expect(directions.find('TextBox').exists()).toEqual(true)
  })

  it('Should update directions when create recipe step success', async () => {
    // mock props
    const props = {
      createRecipeStep: () => new Promise((response, error) => {
        error()
      }),
    }

    const directions = shallow(<DirectionsForm {...props} />)

    directions.find('Button').at(1).props().onPress()

    // wait for component update
    await wait(0)

    expect(directions.find('Directions').length).toBe(0)

    directions.setProps({
      createRecipeStep: () => new Promise(resolve => {
        resolve({ data: {
          createRecipeStep: {
            title: 'test',
            id: '1',
            step: 1,
          },
        } })
      }),
    })

    directions.find('Button').at(1).props().onPress()

    // wait for component update
    await wait(0)

    expect(directions.find('Directions').length).toBe(1)
  })

  it('Render directions form component with defaultProps function', () => {
    DirectionsForm.defaultProps.onDismiss()
    expect(DirectionsForm.defaultProps.onDismiss).toBeDefined()

    DirectionsForm.defaultProps.handleAddStepImage()
    expect(DirectionsForm.defaultProps.handleAddStepImage).toBeDefined()
  })

  it('Should show categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
    icon.at(1).props().onPress()
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(true)

    // Submit Categories Form
    const categoriesProps = recipe.find('Apollo(Classify)').props()
    categoriesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should show cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
    icon.at(2).props().onPress()
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(true)

    // Submit Cooking types Form
    const cookingTypesProps = recipe.find('Apollo(Classify)').props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should hide categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    icon.at(1).props().onPress()
    recipe.find('Apollo(Classify)').props().onDismiss()
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Should hide cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    icon.at(2).props().onPress()
    recipe.find('Apollo(Classify)').props().onDismiss()
    expect(recipe.find('Apollo(Classify)').exists()).toEqual(false)
  })

  it('Renders correctly Classify commponent', () => {
    const classify = renderer.create(<Classify />).toJSON()
    expect(classify).toMatchSnapshot()
  })

  it('Render Classify component with size medium', () => {
    classifyProps = {
      ...classifyProps,
      size: 'medium',
    }
    const classify = renderer.create(<Classify {...classifyProps} />).toJSON()
    expect(classify).toMatchSnapshot()
  })

  it('Render Classify component with loading', () => {
    classifyProps = {
      ...classifyProps,
      loading: true,
    }
    const classify = renderer.create(<Classify {...classifyProps} />).toJSON()
    expect(classify).toMatchSnapshot()
  })

  it('Render Classify component with data', () => {
    classifyProps = {
      ...classifyProps,
      loading: false,
      data: categories,
    }
    const classify = renderer.create(<Classify {...classifyProps} />).toJSON()
    expect(classify).toMatchSnapshot()
  })

  it('Render classify component with defaultProps function', () => {
    Classify.defaultProps.onDismiss()
    expect(Classify.defaultProps.onDismiss).toBeDefined()
  })

  it('Render Classify component with data', () => {
    classifyProps = {
      ...classifyProps,
      loading: false,
      data: categories,
      handleSubmit: jest.fn(),
    }
    const classify = shallow(<Classify {...classifyProps} />)
    classify.find('Modal').props().onSubmit()
    expect(classifyProps.handleSubmit).toHaveBeenCalled()

    const radioBtn = classify.find('RadioButton')
    // Default status of first radio button is true
    expect(radioBtn.at(0).props().status).toEqual(true)

    // Checked on second radio button
    radioBtn.at(1).props().onPress()
    // Status of first radio button is false after user select second radio button
    expect(classify.find('RadioButton').at(0).props().status).toEqual(false)
  })
})
