import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListPost from './index'
import { ItemWrapper } from './ListPost.style'

// Mock data
import posts from './__mocks/db'

describe('Components', () => {
  describe('<ListPost />', () => {
    it('Snapshot renders correctly', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <ListPost posts={posts} />
          </MemoryRouter>
        )
        .toJSON()

        expect(tree).toMatchSnapshot()
    })

    it(`Render ${posts.length} child components`, () => {
      const wrapper = shallow(<ListPost posts={posts} />)

      expect(wrapper.find(ItemWrapper).length).toEqual(posts.length)
    })
  })
})
