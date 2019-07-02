// Libs
import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'
import { JSDOM } from 'jsdom'

// Components
import { FlatList } from 'react-native'
import Recipe from './components/Recipe'
import Category from '.'


// Mocks
import { categories, recipes } from '../../mocks'

const { document } = new JSDOM('').window
global.document = document
global.window = document.defaultView
global.Image = window.Image

const props = {
  category: categories[0],
  recipes,
  data: {
    favoriteRecipe: [
      {
        id: 'testId',
      },
    ],
    followCategory: [
      {
        id: 'testId',
      },
    ],
  },
}
describe('Screen', () => {
  describe('Category', () => {
    let component

    beforeEach(() => {
      beforeEach(() => {
        component = shallow(<Category {...props} />)
      })
    })

    it('should render Category screen', () => {
      const renderComponent = renderer.create(<Category {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render Recipe component', () => {
      const componentTree = render(
        <Category {...props} />,
      )

      expect(componentTree.getAllByType(FlatList).length).toBe(1)
      expect(componentTree.getAllByType(Recipe).length).toBe(props.recipes.length)
    })

    it('should render Header component', () => {
      expect(component.find('Header')).toHaveLength(1)
    })
  })
})
