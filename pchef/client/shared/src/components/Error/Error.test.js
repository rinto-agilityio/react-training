// Components
import Error from '.'

const props = {
  message: 'Failed!!!',
}

describe('Components', () => {
  describe('Error', () => {
    it('should render Error component', () => {
      const renderComponent = renderer.create(<Error {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render message correct', () => {
      const component = shallow(<Error {...props} />)
      expect(component.find('Text').contains(props.message)).toBe(true)
    })
  })
})
