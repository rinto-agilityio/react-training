// Components
import { Text } from 'react-native'
import Tabs from '.'

// Mocks
import { categories, recipes } from '../../../../mocks'

const props = {
  categories,
  recipes,
}

describe('Components', () => {
  describe('Tabs', () => {
    let component

    beforeEach(() => {
      component = shallow(<Tabs {...props} />)
    })

    it('should render Tabs component', () => {
      const renderComponent = renderer.create(<Tabs {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render list recipes', () => {
      expect(component.find('Recipe').length).toBe(props.recipes.length)
    })

    it('should render list categories', () => {
      component
        .find('TabHeaderItem')
        .at(1)
        .props()
        .handlePressTab()
      expect(component.find('Category').length).toBe(props.categories.length)
    })

    it('should render message when have no categories', () => {
      const text = 'No categories to show'
      component.setProps({ categories: [] })

      // click to categories tab
      component
        .find('TabHeaderItem')
        .at(1)
        .props()
        .handlePressTab()
      component.update()

      expect(component.contains(<Text>{text}</Text>)).toBe(true)
    })

    it('should render message when have no recipes', () => {
      const text = 'No recipes to show'
      component.setProps({ recipes: [] })
      component.update()
      expect(component.contains(<Text>{text}</Text>)).toBe(true)
    })
  })
})
