// Helpers
import { recipes } from '../../../../mocks'
import { DEFAULT_IMAGE } from '../../../../constants'

// Components
import Recipe from '.'
import Reaction from '../../../../components/Reaction'
import Image from '../../../../components/Image'

describe('Recipe new feed', () => {
  const props = {
    recipe: recipes[0],
    favoriteRecipe: ['idtest'],
    userToggleRecipe: jest.fn(),
    userToggleVote: jest.fn(),
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

  it('Should render recipe with default image', () => {
    component.setProps({
      recipe: {
        ...recipes[0],
        imgUrl: null,
      },
    })

    expect(component.find(Image).props().url).toEqual(DEFAULT_IMAGE)
  })

  it('Should call userToggleVote when press on vote', () => {
    const reaction = component.find(Reaction)
    reaction.props().onPressVote()

    expect(props.userToggleVote).toHaveBeenCalled()
  })

  it('Should call userToggleRecipe when press on favorite', () => {
    const reaction = component.find(Reaction)
    reaction.props().onPressFavorite()

    expect(props.userToggleRecipe).toHaveBeenCalled()
  })
})
