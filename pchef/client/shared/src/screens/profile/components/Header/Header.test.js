// Components
import { Platform } from 'react-native'
import Header from '.'
import Button from '../../../../components/Button'
import Image from '../../../../components/Image'

// Mocks
import { user } from '../../../../mocks'

const props = {
  user,
  handleToSetting: jest.fn(),
}

describe('Components', () => {
  describe('Header', () => {
    let component

    beforeEach(() => {
      props.handleToSetting.mockReturnValue('Icon on press invoked')
      component = shallow(<Header {...props} />)
    })

    it('should render Header component with grid', () => {
      const renderComponent = renderer.create(<Header {...props} isGrid />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should call handleToSetting when press on button', () => {
      component
        .find(Button)
        .props()
        .onPress()
      expect(props.handleToSetting.mock.calls.length).toBe(1)
    })

    it('Should render avatar image if Platform is mobile', () => {
      Platform.OS = 'android'

      component = shallow(<Header {...props} />)

      expect(component.find(Image).props().url).toEqual(props.user.avatar)
    })

    it('Should render avatar with default image if user does not have image', () => {
      const defaultImage =
        'https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png'

      Platform.OS = 'android'

      component = shallow(<Header user={{ name: 'username', avatar: null }} />)

      expect(component.find(Image).props().url).toEqual(defaultImage)
    })
  })
})
