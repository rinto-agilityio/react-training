// Libs
import React from 'react'
import renderer from 'react-test-renderer'
import { render } from 'react-native-testing-library'
import { JSDOM } from 'jsdom'
import { act } from 'react-dom/test-utils'

// Components
import { FlatList, Text } from 'react-native'
import Recipe from './components/Recipe'
import Category from '.'
import Header from './components/Header'
import Loading from '../../components/Loading'
import Errors from '../../components/Error'
import Modal from '../../components/Modal'
import Banner from './components/Header'

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
  handleRedirectLogin: jest.fn(),
  userToggleRecipe: jest.fn(),
  userToggleCategory: jest.fn(),
}
describe('Screen', () => {
  describe('Category', () => {
    let component

    beforeEach(() => {
      component = shallow(<Category {...props} />)
    })

    it('Should render Category screen', () => {
      const renderComponent = renderer.create(<Category {...props} />)
      expect(renderComponent).toMatchSnapshot()
    })

    it('Should render Recipe component', () => {
      const componentTree = render(<Category {...props} />)

      expect(componentTree.getAllByType(FlatList).length).toBe(1)
      expect(componentTree.getAllByType(Recipe).length).toBe(
        props.recipes.length
      )
    })

    it('Should render Header component', () => {
      expect(component.find(Header)).toHaveLength(1)
    })

    it('Should render Loading if component is loading', () => {
      component.setProps({ loading: true })
      expect(component.find(Loading)).toHaveLength(1)
    })

    it('Should render Error component if return error', () => {
      component.setProps({ error: { graphQLErrors: [{ message: 'error' }] } })
      expect(component.find(Errors)).toHaveLength(1)
    })

    it('Should call handleRedirectLogin when trigger onDismiss on modal', () => {
      component.setProps({ error: { graphQLErrors: [{ message: 'error' }] } })
      const modal = component.find(Modal)

      modal.props().onDismiss()
      expect(props.handleRedirectLogin).toHaveBeenCalled()
    })

    it('Should call handleRedirectLogin when trigger onSubmit on modal', () => {
      component.setProps({ error: { graphQLErrors: [{ message: 'error' }] } })
      const modal = component.find(Modal)

      modal.props().onSubmit()
      expect(props.handleRedirectLogin).toHaveBeenCalled()
    })

    it('Should render Text if have no recipes', () => {
      component.setProps({ recipes: null })
      expect(component.find(Text)).toHaveLength(1)
    })

    it('Should call userToggleRecipe', () => {
      const { getByTestId } = render(<Category {...props} />)
      getByTestId('recipe-0').props.onPressIcon()

      expect(props.userToggleRecipe).toHaveBeenCalled()
    })

    it('Should set list view to grid when press grid icon', () => {
      let components
      act(() => {
        components = mount(<Category {...props} />)
        components
          .find(Banner)
          .props()
          .onSelectListView('apps')
      })

      act(() => {
        components.update()
      })

      expect(components.find(Banner).props().isGrid).toBe(true)
    })

    it('Should set list view to flatlist when press view-list icon', () => {
      let components
      act(() => {
        components = mount(<Category {...props} />)
        components
          .find(Banner)
          .props()
          .onSelectListView('view-list')
      })

      act(() => {
        components.update()
      })

      expect(components.find(Banner).props().isGrid).toBe(false)
    })

    it('Should call userToggleCategory when press follow', () => {
      const banner = component.find(Banner)
      banner.props().onFollowing()
      expect(props.userToggleCategory).toHaveBeenCalled()
    })
  })
})
