// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Header from '.'
import Icon from '../../../../components/Icon'

// Mock
import { categories } from '../../../../mocks'

const props = {
  category: categories[0],
}

describe('Components', () => {
  describe('Header', () => {
    let component

    beforeEach(() => {
      component = shallow(<Header {...props} />)
    })

    it('should render Header component with grid', () => {
      const renderComponent = renderer.create(<Header {...props} isGrid />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should render Header component without grid', () => {
      expect(
        component
          .find(Icon)
          .at(1)
          .props().color
      ).toEqual('#c5c5c5')
    })
  })
})
