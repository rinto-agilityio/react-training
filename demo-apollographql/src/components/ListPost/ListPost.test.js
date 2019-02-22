import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListPost from './ListPost'
import { ItemWrapper } from './ListPost.style'

// Mock data
import posts from './__mocks/db'

describe('Components', () => {
  describe('<ListPost />', () => {
    const props = {
      posts: posts
    }

    // Testing snapshot
    it('Render correctly ListPost component', () => {
      const ListPostComponent = shallow(
        <MemoryRouter keyLength={0}>
          <ListPost {...props} />
        </MemoryRouter>
      )

      expect(ListPostComponent).toMatchSnapshot()
    })

    // Testing props
    it(`Render ${props.posts.length} child components`, () => {
      const ListPostComponent = mount(
        <MemoryRouter keyLength={0}>
          <ListPost {...props} />
        </MemoryRouter>
      )

      expect(ListPostComponent.find(ItemWrapper).length).toEqual(props.posts.length)
    })

    // Testing props
    it('Render 0 child components if props is empty', () => {
      const ListPostComponent = mount(
        <MemoryRouter keyLength={0}>
          <ListPost />
        </MemoryRouter>
      )

      expect(ListPostComponent.find(ItemWrapper).length).toEqual(0)
    })

    // Testing props type
    it('Check prop type', () => {
      const ListPostComponent = mount(
        <MemoryRouter keyLength={0}>
          <ListPost {...props} />
        </MemoryRouter>
      )

      expect(ListPostComponent.find(ListPost).props().posts).toBeArray()
    })
  })
})
