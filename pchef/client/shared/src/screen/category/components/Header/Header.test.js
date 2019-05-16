// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Header from '.'

// Mock
import { category } from '../../../../mocks'

const props = {
  category,
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
          .find('Icon')
          .at(0)
          .props().color,
      ).toEqual('#c5c5c5')
    })
  })

  it('should have default onFollowing props', () => {
    Header.defaultProps.onFollowing()
    expect(Header.defaultProps.onFollowing).toBeDefined()
  })

  it('should have default onSelectListView props', () => {
    Header.defaultProps.onSelectListView()
    expect(Header.defaultProps.onSelectListView).toBeDefined()
  })
})
