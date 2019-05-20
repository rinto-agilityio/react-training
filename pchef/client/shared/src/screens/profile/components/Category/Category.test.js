// Components
import Category from '.'

// Mocks
import { categories } from '../../../../mocks'

const props = {
  category: categories[0],
}

describe('Components', () => {
  describe('Category in profile', () => {
    it('should render Category component with grid', () => {
      const renderComponent = renderer.create(<Category {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })
  })
})
