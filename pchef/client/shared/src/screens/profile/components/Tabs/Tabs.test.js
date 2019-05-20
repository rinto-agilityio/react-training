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
    it('should render Tabs component', () => {
      const renderComponent = renderer.create(<Tabs {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })
  })
})
