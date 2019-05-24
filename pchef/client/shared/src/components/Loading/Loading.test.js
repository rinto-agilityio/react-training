// Components
import Loading from '.'

describe('Components', () => {
  describe('Loading', () => {
    it('should render Loading component', () => {
      const renderComponent = renderer.create(<Loading />)
      expect(renderComponent).toMatchSnapshot()
    })
  })
})
