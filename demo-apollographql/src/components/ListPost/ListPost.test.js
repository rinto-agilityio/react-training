import React from 'react'
import { shallow } from 'enzyme'

// Components
import ListPost from './index'

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
  describe('ListPost', () => {
    it.only('Check test running', () => {

      const wrapper = shallow(<ListPost posts={mockData} />)

      expect(wrapper.find('.test-classname').length).toEqual(3)
    })
  })
})
