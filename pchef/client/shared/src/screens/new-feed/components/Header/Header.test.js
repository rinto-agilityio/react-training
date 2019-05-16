// Components
import Header from '.'

describe('Header new feed', () => {
  const props = {
    image: 'http://www.kptncook.com/assets/downloads/AppIcon/KptnCook_AppIcon.png',
    onPressIcon: jest.fn(),
    handleTouch: jest.fn(),
  }
  const component = shallow(<Header {...props} />)

  it('renders correctly header commponent', () => {
    expect(component).toMatchSnapshot()
  })

  it('Render recipe component with size medium', () => {
    component.setProps({
      size: 'medium',
    })
    expect(component).toMatchSnapshot()
  })

  it('Render recipe component with size large', () => {
    component.setProps({
      size: 'large',
    })
    expect(component).toMatchSnapshot()
  })

  it('Function props should be defined', () => {
    Header.defaultProps.onPressIcon()
    Header.defaultProps.handleTouch()
    expect(Header.defaultProps.onPressIcon).toBeDefined()
    expect(Header.defaultProps.handleTouch).toBeDefined()
  })
})
