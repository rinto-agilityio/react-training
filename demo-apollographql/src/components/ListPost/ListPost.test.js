import React from 'react'
import { shallow } from 'enzyme'

// Components
import ListPost from './index'
import { ItemWrapper } from './ListPost.style'

// Mock data
import posts from './__mocks/db'

describe('Components', () => {
  describe('<ListPost />', () => {
    it(`Render ${posts.length} child components`, () => {
      const wrapper = shallow(<ListPost posts={posts} />)

      expect(wrapper.find(ItemWrapper).length).toEqual(posts.length)
    })
  })
})
