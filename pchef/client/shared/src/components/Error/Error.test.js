// Components
import Error from '.'

const props = {
  errorMessage: 'Failed!!!',
}

describe('Components', () => {
  describe('Error', () => {
    it('should render Error component', () => {
      const renderComponent = renderer.create(<Error {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render errorMessage correct', () => {
      const component = shallow(<Error {...props} />)
      expect(component.find('Text').contains(props.errorMessage)).toBe(true)
    })
  })
})
