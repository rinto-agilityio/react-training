// Libs
import React from 'react'
import renderer from 'react-test-renderer'

// Components
import Recipe from '.'
import Image from '../../../../components/Image'
import Icon from '../../../../components/Icon'

// Mocks
import { recipes } from '../../../../mocks'

const props = {
  recipe: recipes[0],
}

describe('Components', () => {
  describe('Recipe', () => {
    let wrapper
    let handlePressImage
    let handlePressIcon

    beforeEach(() => {
      handlePressImage = jest.fn()
      handlePressImage.mockReturnValue('Image on press invoked')

      handlePressIcon = jest.fn()
      handlePressIcon.mockReturnValue('Icon on press invoked')

      wrapper = shallow(
        <Recipe
          {...props}
          handlePressImage={handlePressImage}
          handlePressIcon={handlePressIcon}
        />,
      )
    })

    it('should render Header component with grid', () => {
      const renderComponent = renderer.create(<Recipe {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('should call handlePressImage when press on image', () => {
      wrapper
        .find(Image)
        .props()
        .handleTouch()
      expect(handlePressImage.mock.calls.length).toBe(1)
    })

    it('should call handlePressIcon when press on Icon', () => {
      wrapper
        .find(Icon)
        .props()
        .onPress()
      expect(handlePressIcon.mock.calls.length).toBe(1)
    })

    it('size icon equal medium if pass medium size to props', () => {
      wrapper.setProps({ size: 'medium' })
      const sizeIcon = wrapper.find(Icon).props().size

      expect(sizeIcon).toEqual(18)
    })

    it('should have default handlePressIcon props', () => {
      Recipe.defaultProps.handlePressIcon()
      expect(Recipe.defaultProps.handlePressIcon).toBeDefined()
    })

    it('should have default handlePressImage props', () => {
      Recipe.defaultProps.handlePressImage()
      expect(Recipe.defaultProps.handlePressImage).toBeDefined()
    })
  })
})
