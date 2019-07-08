// Libs
import wait from 'waait'

// Components
import RecipeForm from '.'
import DirectionFormContainer from '../../../../containers/DirectionForm'
import DirectionForm from './DirectionForm'

import IngredientsForm from './IngredientsForm'
import Classify from './Classify'
import Categories from '../../../../containers/Categories'
import CookingTypes from '../../../../containers/CookingTypes'
import Button from '../../../../components/Button'
import Modal from '../../../../components/Modal'
import Icon from '../../../../components/Icon'
import TextBox from '../../../../components/TextBox'
import RadioButton from '../../../../components/RadioButon'
import Directions from '../Recipe/Directions'
import Error from '../../../../components/Error'

// Mocks
import { categories, cookingTypes } from '../../../../mocks'
// import { isError } from 'util';

import { validator } from '../../../../helpers/validators'

jest.mock('../../../../helpers/validators', () => ({
  validator: jest.fn(),
}))


describe('recipe form', () => {
  const recipeProps = {
    recipre: {
      id: '1',
    },
    compressImage: jest.fn(),
    createRecipe: () => new Promise(resolve => {
      resolve({ data: {
        createRecipe: {
          id: '1',
        },
      } })
    }),
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

  it('Should show ingredients form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    expect(recipe.find(IngredientsForm).exists()).toEqual(false)
    icon.at(3).props().onPress()
    expect(recipe.find(IngredientsForm).exists()).toEqual(true)

    // Submit Ingredients Form
    const ingredientsProps = recipe.find(IngredientsForm).props()
    ingredientsProps.handleSubmitIngredients('test')
    expect(recipe.find(IngredientsForm).exists()).toEqual(false)
  })

  it('Should show directions form', async () => {
    const recipe = shallow(<RecipeForm {...recipeProps} />)
    const icon = recipe.find(Icon)

    expect(recipe.find(DirectionFormContainer).exists()).toEqual(false)

    validator.mockImplementation(() => ({
      errors: {
        isError: false,
      },
    }))

    icon.at(4).props().onPress()
    await wait(0)

    expect(recipe.find(DirectionFormContainer).exists()).toEqual(true)
  })

  it('Should hide ingredients form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    icon.at(3).props().onPress()
    recipe.find(IngredientsForm).props().onDismiss()
    expect(recipe.find('IngredientsForm').exists()).toEqual(false)
  })

  it('Should hide directions form', async () => {
    const recipe = shallow(<RecipeForm {...recipeProps} />)
    validator.mockImplementation(() => ({
      errors: {
        isError: false,
      },
    }))

    const icon = recipe.find(Icon)
    icon.at(4).props().onPress()
    await wait(0)

    expect(recipe.find(DirectionFormContainer).exists()).toEqual(true)

    const formProps = recipe.find(DirectionFormContainer).props()
    formProps.onDismiss({ directors: 1 })

    expect(recipe.find('DirectionFormContainer').exists()).toEqual(false)
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
    ingredients.find(Modal).props().onSubmit()
    expect(props.handleSubmitIngredients).toHaveBeenCalled()
  })

  it('Renders correctly directions form commponent', () => {
    const directions = renderer.create(<DirectionForm />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent with size medium', () => {
    const directions = renderer.create(<DirectionForm size="medium" />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent with size large', () => {
    const directions = renderer.create(<DirectionForm size="large" />).toJSON()
    expect(directions).toMatchSnapshot()
  })

  it('Renders correctly directions form commponent when click add more step', () => {
    const directions = shallow(<DirectionForm />)
    directions.find(Icon).last().props().onPress()
    expect(directions.find(TextBox).exists()).toEqual(true)
  })

  it('createRecipeStep not called if errors exist', () => {
    // mock props
    const props = {
      createRecipeStep: jest.fn(),
    }
    validator.mockReturnValue({
      title: 'Required',
    })

    const directions = shallow(<DirectionForm {...props} />)

    directions.find(Button).at(1).props().onPress()

    expect(props.createRecipeStep).not.toHaveBeenCalled()
  })

  it('Should update directions when create recipe step success', async () => {
    // mock props
    const props = {
      createRecipeStep: () => new Promise((response, error) => {
        error()
      }),
      uploadStepImage: jest.fn(),
    }
    validator.mockImplementation(() => ({
      errors: {
        isError: false,
      },
    }))

    const directions = shallow(<DirectionForm {...props} />)

    directions.find(Button).at(1).props().onPress()

    // wait for component update
    await wait(0)

    expect(directions.find(Directions).length).toBe(0)

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

    // wait for component update
    await wait(0)

    directions.find(Button).at(1).props().onPress()

    // wait for component update
    await wait(0)

    expect(directions.find(Directions).length).toBe(1)
  })

  it('Should update directions when create recipe step fail', async () => {
    // mock props
    const props = {
      createRecipeStep: jest.fn(() => 'Error'),
    }
    validator.mockReturnValue({})

    const directions = shallow(<DirectionForm {...props} />)

    directions.find(Button).at(1).props().onPress()

    // wait for component update
    await wait(0)

    expect(directions.find(Error).length).toBe(1)
  })

  it('Should show categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    expect(recipe.find(Categories).exists()).toEqual(false)
    icon.at(1).props().onPress()
    expect(recipe.find(Categories).exists()).toEqual(true)

    // Submit Categories Form
    const categoriesProps = recipe.find(Categories).props()
    categoriesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find(Categories).exists()).toEqual(false)
  })

  it('Should show cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    expect(recipe.find(CookingTypes).exists()).toEqual(false)
    icon.at(2).props().onPress()
    expect(recipe.find(CookingTypes).exists()).toEqual(true)

    // Submit Cooking types Form
    const cookingTypesProps = recipe.find(CookingTypes).props()
    cookingTypesProps.handleSubmit({
      id: '1',
      name: 'test',
    })
    expect(recipe.find(CookingTypes).exists()).toEqual(false)
  })

  it('Should hide categories form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    icon.at(1).props().onPress()
    recipe.find(Categories).props().onDismiss()
    expect(recipe.find(Categories).exists()).toEqual(false)
  })

  it('Should hide cooking types form', () => {
    const recipe = shallow(<RecipeForm />)
    const icon = recipe.find(Icon)
    icon.at(2).props().onPress()
    recipe.find(CookingTypes).props().onDismiss()
    expect(recipe.find(CookingTypes).exists()).toEqual(false)
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

  it('Render Classify component with cookingTypes data', () => {
    classifyProps = {
      ...classifyProps,
      loading: false,
      cookingTypes,
    }
    const classify = renderer.create(<Classify {...classifyProps} />).toJSON()
    expect(classify).toMatchSnapshot()
  })

  it('Render Classify component with categories data', () => {
    classifyProps = {
      ...classifyProps,
      loading: false,
      categories,
      handleSubmit: jest.fn(),
      title: 'Categories',
    }
    const classify = shallow(<Classify {...classifyProps} />)
    classify.find(Modal).props().onSubmit()
    expect(classifyProps.handleSubmit).toHaveBeenCalled()

    // Should render RadioButton
    const radioBtn = classify.find(RadioButton)
    expect(radioBtn.exists()).toBe(true)
  })
})
