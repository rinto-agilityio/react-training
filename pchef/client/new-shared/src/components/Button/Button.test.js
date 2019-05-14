// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Button from '.'
import { Text } from 'react-native-paper'

const props = {
  onPress: jest.fn(),
  title: 'button',
  type: 'success',
}

const renderComponent = renderer.create(<Button {...props} />)

describe('Components', () => {
  describe('Button', () => {
    let component

    beforeEach(() => {
      component = shallow(<Button {...props} />)
    })
    it('should render Button component', () => {
      expect(renderComponent).toMatchSnapshot()
    })

    it('should have call onPress when press on button', () => {
      component.props().onPress()
      expect(props.onPress).toHaveBeenCalled()
    })
  })
})
