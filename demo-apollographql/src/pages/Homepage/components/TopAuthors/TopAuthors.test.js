import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Data mock
import { posts } from '../../../../../server/db'

// Components
import List from '@material-ui/core/List'
import TopAuthors from './TopAuthors'

describe('Component', () => {
  describe('TopAuthors', () => {
    const props = {
            title: 'Top Authors',
            posts
          },
          TopAuthorsComponent = mount(
            <MemoryRouter>
              <TopAuthors {...props} />
            </MemoryRouter>
          )

    // Testing snapshot
    it('Render correctly TopAuthors component', () => {
      const TopAuthorsComponentSnapshot = shallow(
        <MemoryRouter keyLength={0}>
          <TopAuthors {...props} />
        </MemoryRouter>
      )

      expect(TopAuthorsComponentSnapshot).toMatchSnapshot()
    })

    // Testing props
    it('Render correctly section title', () => {
      // Section title stay at the first node
      expect(TopAuthorsComponent.find('h3').length).toEqual(1)
      expect(TopAuthorsComponent.find('h3').at(0).text()).toEqual(props.title)
    })

    it('Render correct wrapper list items', () => {
      expect(TopAuthorsComponent.find(List).length).toEqual(1)
    })

    // Testing prop-type
    it('Check prop-type', () => {
      expect(TopAuthorsComponent.find(TopAuthors).props().title).toBeString()
      expect(TopAuthorsComponent.find(TopAuthors).props().posts).toBeArray()
    })
  })
})
