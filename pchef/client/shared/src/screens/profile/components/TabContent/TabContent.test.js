// libs
import { MockedProvider } from 'react-apollo/test-utils'

// Components
import { Text } from 'react-native'
import { JSDOM } from 'jsdom'
import TabContent from '.'

// Mocks
import { recipes } from '../../../../mocks'


const { document } = new JSDOM('').window
global.document = document
global.window = document.defaultView
global.Image = window.Image

const props = {
  recipes,
  favoriteRecipe: recipes,
}

describe('Components', () => {
  describe('TabContent', () => {
    let component

    beforeEach(() => {
      component = shallow(<TabContent {...props} />)
    })

    it('should render TabContent component', () => {
      const renderComponent = renderer.create(
        <MockedProvider>
          <TabContent {...props} />
        </MockedProvider>,
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render message when have no recipes', () => {
      const text = 'No recipes to show'
      component.setProps({ recipes: [] })

      expect(component.contains(<Text>{text}</Text>)).toBe(true)
    })
  })
})
