// Libs
import { JSDOM } from 'jsdom'
import { MockedProvider } from 'react-apollo/test-utils'

// Components
import Tabs from '.'
import TabContent from '../TabContent'
import TabHeaderItem from '../TabHeaderItem'

// Mocks
import { recipes } from '../../../../mocks'

const { document } = new JSDOM('').window
global.document = document
global.window = document.defaultView
global.Image = window.Image

const props = {
  ownRecipes: recipes,
  favoriteRecipe: recipes,
}

describe('Components', () => {
  describe('Tabs', () => {
    let component

    beforeEach(() => {
      component = shallow(<Tabs {...props} />)
    })

    it('should render Tabs component', () => {
      const renderComponent = renderer.create(
        <MockedProvider>
          <Tabs {...props} />
        </MockedProvider>,
      )
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render list own recipes', () => {
      expect(component.find(TabContent).props().recipes.length).toBe(
        props.ownRecipes.length
      )
    })

    it('should render list favorite recipes', () => {
      component
        .find(TabHeaderItem)
        .at(1)
        .props()
        .handlePressTab()
      expect(component.find(TabContent).props().recipes.length).toBe(
        props.favoriteRecipe.length
      )
    })
  })
})
