import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import SinglePost from './index'

// Mock data
import { posts, authors } from '../../../../../server/db'

describe('Components', () => {
  describe('<SinglePost />', () => {
    const props = {
      title: posts[0].title,
      fullContent: posts[0].fullContent,
      author: authors[0]
    }

    // Testing snapshot
    it('Render correctly SinglePost component', () => {
      const SinglePostComponent = shallow(
        <MemoryRouter keyLength={0}>
          <SinglePost {...props} />
        </MemoryRouter>
      )

      expect(SinglePostComponent).toMatchSnapshot()
    })

    // Testing props
    it(`Render correctly Post title`, () => {
      const SinglePostComponent = mount(
        <MemoryRouter keyLength={0}>
          <SinglePost {...props} />
        </MemoryRouter>
      )

      expect(SinglePostComponent.find('h1').length).toEqual(1)
    })

    it('Render empty Post title if prop is empty', () => {
      const SinglePostComponent = mount(
        <MemoryRouter keyLength={0}>
          <SinglePost />
        </MemoryRouter>
      )

      expect(SinglePostComponent.find('h1').length).toEqual(1)
      expect(SinglePostComponent.find('h1').text()).toEqual('')
    })

    // Testing props type
    it('Check prop type', () => {
      const SinglePostComponent = mount(
        <MemoryRouter keyLength={0}>
          <SinglePost {...props} />
        </MemoryRouter>
      )

      expect(SinglePostComponent.find(SinglePost).props().title).toBeString()
      expect(SinglePostComponent.find(SinglePost).props().fullContent).toBeString()
      expect(SinglePostComponent.find(SinglePost).props().author).toBeObject()
    })
  })
})
