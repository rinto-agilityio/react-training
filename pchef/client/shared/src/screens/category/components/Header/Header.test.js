// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Header from '.'
import Icon from '../../../../components/Icon'
import Button from '../../../../components/Button'

// Mock
import { categories } from '../../../../mocks'

const props = {
  category: categories[0],
  onSelectListView: jest.fn(),
}

describe('Components', () => {
  describe('Header', () => {
    let component

    beforeEach(() => {
      component = shallow(<Header {...props} />)
    })

    it('Should render Header component with grid', () => {
      const renderComponent = renderer.create(<Header {...props} isGrid />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Header component without grid', () => {
      expect(
        component
          .find(Icon)
          .at(1)
          .props().color
      ).toEqual('#c5c5c5')
    })

    it('Should call onSelectListView when pess on icon', () => {
      const icon = component.find(Icon).at(0)
      icon.props().onPress()
      expect(props.onSelectListView).toHaveBeenCalled()
    })

    it('Title of button should be Unfollowed if not follow category', () => {
      component.setProps({ isFollow: true })
      expect(component.find(Button).props().title).toEqual('Unfollowed')
    })
  })
})
