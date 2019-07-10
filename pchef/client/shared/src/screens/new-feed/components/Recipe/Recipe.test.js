// Components
import { Text } from 'react-native'
import Recipe from '.'
import Image from '../../../../components/Image'
import Reaction from '../../../../components/Reaction'

// Helpers
import { recipes } from '../../../../mocks'

describe('Recipe new feed', () => {
  const props = {
    recipe: recipes[0],
    favoriteRecipe: ['idtest'],
    userToggleRecipe: jest.fn(),
    handleClickRecipe: jest.fn(),
    handleSaveRecipe: jest.fn(),
    handleToggleVote: jest.fn(),
  }

  let component

  beforeEach(() => {
    component = shallow(<Recipe {...props} />)
  })

  it('Renders correctly recipe commponent', () => {
    expect(component).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    component.setProps({
      size: 'medium',
    })
    expect(component).toMatchSnapshot()
  })

  it('Should call handleClickRecipe when press on title', () => {
    const title = component.find(Text).at(0)
    title.props().onPress()
    expect(props.handleClickRecipe).toHaveBeenCalled()
  })

  it('Should call handleClickRecipe when press on image', () => {
    const image = component.find(Image)
    image.props().handleTouch()
    expect(props.handleClickRecipe).toHaveBeenCalled()
  })

  it('Should call handleSaveRecipe when press on favorite icon', () => {
    const reaction = component.find(Reaction)
    reaction.props().onPressFavorite()
    expect(props.handleSaveRecipe).toHaveBeenCalled()
  })

  it('Should call handleToggleVote when press on vote icon', () => {
    const reaction = component.find(Reaction)
    reaction.props().onPressVote()
    expect(props.handleToggleVote).toHaveBeenCalled()
  })
})
