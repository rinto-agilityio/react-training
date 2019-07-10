// Components
import { Menu } from 'react-native-paper'
import Header from '.'
import Icon from '../Icon'
import Button from '../Button'

const props = {
  onPressCategoryIcon: jest.fn(),
  data: {
    user: {
      avatar: 'image.png',
    },
  },
  onDirectTo: jest.fn(),
}

const component = shallow(<Header {...props} />)

describe('Components', () => {
  describe('Header', () => {
    it('Should render Header component', () => {
      const primaryComponent = renderer.create(
        <Header type="primary" customStyle={{ flex: 1 }} />
      )
      const secondaryComponent = renderer.create(<Header type="secondary" />)

      expect(primaryComponent).toMatchSnapshot()
      expect(secondaryComponent).toMatchSnapshot()
    })

    it('Should call to onPressCategoryIcon', () => {
      const icon = component.find(Icon)
      icon.props().onPress()
      expect(props.onPressCategoryIcon).toHaveBeenCalled()
    })

    it('Should call to onDirectTo when press on Button', () => {
      const createRecipeButton = component.find(Button)
      createRecipeButton.props().onPress()
      expect(props.onDirectTo).toHaveBeenCalled()
    })

    it('Should call to onDirectTo when press on Menu.Item', () => {
      const firstMenu = component.find(Menu.Item).at(0)
      firstMenu.props().onPress()
      expect(props.onDirectTo).toHaveBeenCalled()

      const secondMenu = component.find(Menu.Item).at(1)
      secondMenu.props().onPress()
      expect(props.onDirectTo).toHaveBeenCalled()

      const thirdMenu = component.find(Menu.Item).at(2)
      thirdMenu.props().onPress()
      expect(props.onDirectTo).toHaveBeenCalled()
    })

    it('Menu should invisible if trigger onDismiss', () => {
      const menu = component.find(Menu)
      menu.props().onDismiss()
      component.update()

      expect(menu.props().visible).toBe(false)
    })
  })
})
