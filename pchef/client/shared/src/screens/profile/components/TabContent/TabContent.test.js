// Components
import { Text } from 'react-native'
import TabContent from '.'

// Mocks
import { recipes } from '../../../../mocks'

const props = {
  recipes,
}

describe('Components', () => {
  describe('TabContent', () => {
    let component

    beforeEach(() => {
      component = shallow(<TabContent {...props} />)
    })

    it('should render TabContent component', () => {
      const renderComponent = renderer.create(<TabContent {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render message when have no recipes', () => {
      const text = 'No recipes to show'
      component.setProps({ recipes: [] })

      expect(component.contains(<Text>{text}</Text>)).toBe(true)
    })
  })
})
