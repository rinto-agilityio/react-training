import React from 'react'

// Mock
import { user } from '../../mocks'

// Components
import Settings from '.'
import Button from '../../components/Button'

const props = {
  user,
  handleLogout: jest.fn(),
}

describe('Screens', () => {
  describe('Settings', () => {
    it('should render Setting screen', () => {
      const renderComponent = renderer.create(<Settings {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should call handleLogout when click logout button', () => {
      props.handleLogout.mockReturnValue('Icon on press invoked')

      const wrapper = shallow(<Settings {...props} />)

      wrapper
        .find(Button)
        .props()
        .onPress()
      expect(props.handleLogout.mock.calls.length).toBe(1)
    })
  })
})
