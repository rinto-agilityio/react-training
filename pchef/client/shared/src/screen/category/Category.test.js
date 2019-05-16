// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Mocks
import { category, recipes } from '../../mocks'

// Components
import Category from '.'

const props = {
  category,
  recipes,
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
      expect(component.find('Recipe')).toHaveLength(recipes.length)
    })

    it('should render Header component', () => {
      expect(component.find('Header')).toHaveLength(1)
    })
  })
})
