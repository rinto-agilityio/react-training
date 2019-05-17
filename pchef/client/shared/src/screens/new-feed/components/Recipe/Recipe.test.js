// Helpers
import { recipe } from '../../../../mocks/recipe'

// Components
import Recipe from '.'

describe('Recipe new feed', () => {
  const props = {
    recipe,
    onSelectStep: jest.fn(),
  }
  const component = shallow(<Recipe {...props} />)

  it('Renders correctly recipe commponent', () => {
    expect(component).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    component.setProps({
      size: 'medium',
    })
    expect(component).toMatchSnapshot()
  })

  it('Function props should be defined', () => {
    Recipe.defaultProps.onPress()
    expect(Recipe.defaultProps.onPress).toBeDefined()
  })
})
