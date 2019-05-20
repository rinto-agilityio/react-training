// Components
import Tabs from '.'

// Mocks
import { categories, recipes } from '../../../../mocks'

const props = {
  categories,
  recipes,
}

describe('Components', () => {
  describe('Tabs', () => {
    // let component

    // beforeEach(() => {
    //   props.handleToSetting.mockReturnValue('Icon on press invoked')
    //   component = shallow(<Tabs {...props} />)
    // })

    it('should render Header component with grid', () => {
      const renderComponent = renderer.create(<Tabs {...props} isGrid />)
      expect(renderComponent).toMatchSnapshot()
    })

    // it('should call handleToSetting when press on button', () => {
    //   component
    //     .find('Button')
    //     .props()
    //     .onPress()
    //   expect(props.handleToSetting.mock.calls.length).toBe(1)
    // })
  })
})
