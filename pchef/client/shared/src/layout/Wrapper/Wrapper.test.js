// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Wrapper from '.'

const props = {
  onLayout: jest.fn(),
}

const renderComponent = renderer.create(
  <Wrapper {...props}>
    <p>test</p>
  </Wrapper>,
)

describe('Components', () => {
  describe('Wrapper', () => {
    let component

    beforeEach(() => {
      component = shallow(
        <Wrapper {...props}>
          <p>test</p>
        </Wrapper>,
      )
    })
    it('should render Button component', () => {
      expect(renderComponent).toMatchSnapshot()
    })

    it('should have call onLayout', () => {
      component.props().onLayout()
      expect(props.onLayout).toHaveBeenCalled()
    })
  })
})
