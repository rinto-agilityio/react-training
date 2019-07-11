// Libs
import { act } from 'react-dom/test-utils'

// Components
import { Text } from 'react-native'
import RecipeList from '.'
import Loading from '../../../../components/Loading'
import Recipe from '../Recipe'

// Mocks
import { recipes } from '../../../../mocks'
import { NO_RECIPES_MESSAGE } from '../../../../constants'

const props = {
  recipes,
  favoriteRecipe: recipes,
  userToggleRecipe: jest.fn(),
  handleClickRecipe: jest.fn(),
  userToggleVote: jest.fn(),
  userId: '1',
  type: 'primary',
}

describe('Components', () => {
  describe('RecipeList', () => {
    let component, wrapper

    beforeEach(() => {
      component = shallow(<RecipeList {...props} />)
      act(() => {
        wrapper = mount(<RecipeList {...props} />)
      })
    })

    it('Should render RecipeList component', () => {
      const renderComponent = renderer.create(<RecipeList {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Loading component if is loading', () => {
      component.setProps({ loading: true })
      expect(component.find(Loading)).toHaveLength(1)
    })

    it('Should show no recipes message if have no recipes', () => {
      component.setProps({ recipes: [] })
      expect(
        component
          .find(Text)
          .at(2)
          .prop('children')
      ).toEqual(NO_RECIPES_MESSAGE)
    })

    it('Should show recipes list', () => {
      act(() => {
        wrapper
          .find(Text)
          .at(0)
          .props()
          .onPress()
      })

      act(() => {
        wrapper.update()
      })

      expect(wrapper.find(Recipe)).toHaveLength(props.recipes.length)

      // render with sort list
      act(() => {
        wrapper
          .find(Text)
          .at(1)
          .props()
          .onPress()
      })

      act(() => {
        wrapper.update()
      })

      expect(wrapper.find(Recipe)).toHaveLength(props.recipes.length)
    })

    it('Should call userToggleRecipe when toggle on recipe', () => {
      act(() => {
        wrapper
          .find(Text)
          .at(0)
          .props()
          .onPress()
      })

      act(() => {
        wrapper.update()
      })

      const recipe = wrapper.find(Recipe).at(0)
      recipe.props().handleSaveRecipe()
      expect(props.userToggleRecipe).toHaveBeenCalled()
    })

    it('Should call userToggleVote when toggle vote on recipe', () => {
      act(() => {
        wrapper
          .find(Text)
          .at(0)
          .props()
          .onPress()
      })

      act(() => {
        wrapper.update()
      })

      const recipe = wrapper.find(Recipe).at(0)
      recipe.props().handleToggleVote()
      expect(props.userToggleVote).toHaveBeenCalled()
    })
  })
})
