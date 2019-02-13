import React from 'react'
import { shallow } from 'enzyme'

// Components
import ListPost from './index'
import { ItemWrapper } from './ListPost.style'

const mockData = [
  {
    id: 1,
    slug: 'post1',
    title: 'Post 1',
    content: ''
  },
  {
    id: 2,
    slug: 'post2',
    title: 'Post 2',
    content: ''
  }
]

describe('Components', () => {
  describe('<ListPost />', () => {
    it(`Render ${mockData.length} child components`, () => {
      const wrapper = shallow(<ListPost posts={mockData} />)

      expect(wrapper.find(ItemWrapper).length).toEqual(mockData.length)
    })
  })
})
