import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Data mock
import { posts } from '../../../../../server/db'

// Components
import LatestPosts from './LatestPosts'

describe('Component', () => {
  describe('LatestPosts', () => {
    const props = {
            title: 'Latest Posts',
            posts
          },
          LatestPostsComponent = mount(
            <MemoryRouter>
              <LatestPosts {...props} />
            </MemoryRouter>
          )

    // Testing snapshot
    it('Render correctly LatestPosts component', () => {
      const LatestPostsComponentSnapshot = shallow(
        <MemoryRouter keyLength={0}>
          <LatestPosts {...props} />
        </MemoryRouter>
      )

      expect(LatestPostsComponentSnapshot).toMatchSnapshot()
    })

    // Testing props
    it('Render correctly section title', () => {
      // Section title stay at the first node
      expect(LatestPostsComponent.find('h3').length).toEqual(1)
      expect(LatestPostsComponent.find('h3').at(0).text()).toEqual(props.title)
    })

    it('Render correct number list items', () => {
      expect(LatestPostsComponent.find('h2').length).toEqual(props.posts.length)
    })

    // Testing prop-type
    it('Check prop-type', () => {
      expect(LatestPostsComponent.find(LatestPosts).props().title).toBeString()
      expect(LatestPostsComponent.find(LatestPosts).props().posts).toBeArray()
    })
  })
})
