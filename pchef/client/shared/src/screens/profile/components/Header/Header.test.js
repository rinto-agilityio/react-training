// Components
import Header from '.'

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
        .find('Button')
        .props()
        .onPress()
      expect(props.handleToSetting.mock.calls.length).toBe(1)
    })
  })
})
