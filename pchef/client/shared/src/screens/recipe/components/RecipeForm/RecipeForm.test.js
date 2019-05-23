// Components
import RecipeForm from '.'
import DirectionsForm from './DirectionForm'
import IngredientsForm from './IngredientsForm'

describe('recipe form', () => {
  const recipeProps = {
    recipre: {
      id: '1',
    },
  }
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
    console.log(recipe.debug())
    const icon = recipe.find('Icon')
    expect(recipe.find('DirectionsForm').exists()).toEqual(false)
    icon.at(4).props().onPress()
    expect(recipe.find('DirectionsForm').exists()).toEqual(true)

    // Submit Directions Form
    const directionProps = recipe.find('DirectionsForm').props()
    directionProps.handleSubmitDirections({
      title: 'test',
    })
    expect(recipe.find('DirectionsForm').exists()).toEqual(false)
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
    recipe.find('DirectionsForm').props().onDismiss()
    expect(recipe.find('DirectionsForm').exists()).toEqual(false)
  })

  it('Renders correctly ingredients form commponent', () => {
    const ingredients = renderer.create(<IngredientsForm />).toJSON()
    expect(ingredients).toMatchSnapshot()
  })

  it('Renders correctly ingredients form commponent with size medium', () => {
    const ingredients = renderer.create(<IngredientsForm props={{ size: 'medium' }} />).toJSON()
    expect(ingredients).toMatchSnapshot()
  })

  it('Render ingredients form component with defaultProps function', () => {
    IngredientsForm.defaultProps.handleSubmitIngredients()
    expect(IngredientsForm.defaultProps.handleSubmitIngredients).toBeDefined()

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

  it('Render directions form component with defaultProps function', () => {
    DirectionsForm.defaultProps.handleSubmitDirections()
    expect(DirectionsForm.defaultProps.handleSubmitDirections).toBeDefined()

    DirectionsForm.defaultProps.onDismiss()
    expect(DirectionsForm.defaultProps.onDismiss).toBeDefined()

    DirectionsForm.defaultProps.handleAddStepImage()
    expect(DirectionsForm.defaultProps.handleAddStepImage).toBeDefined()
  })

  it('Should show categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    expect(recipe.find('Categories').exists()).toEqual(false)
    icon.at(1).props().onPress()
    expect(recipe.find('Categories').exists()).toEqual(true)

    // Submit Categories Form
    const categoriesProps = recipe.find('Categories').at(0).props()
    categoriesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find('Categories').exists()).toEqual(false)
  })

  it('Should show cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    expect(recipe.find('CookingTypes').exists()).toEqual(false)
    icon.at(2).props().onPress()
    expect(recipe.find('CookingTypes').exists()).toEqual(true)

    // Submit Cooking types Form
    const cookingTypesProps = recipe.find('CookingTypes').at(0).props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find('CookingTypes').exists()).toEqual(false)
  })

  it('Should hide categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    icon.at(1).props().onPress()
    recipe.find('Categories').at(0).props().onDismiss()
    expect(recipe.find('Categories').exists()).toEqual(false)
  })

  it('Should hide cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find('Icon')
    icon.at(2).props().onPress()
    recipe.find('CookingTypes').at(0).props().onDismiss()
    expect(recipe.find('CookingTypes').exists()).toEqual(false)
  })
})
