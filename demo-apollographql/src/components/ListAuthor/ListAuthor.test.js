import React from 'react'
import { shallow, mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListAuthor from './ListAuthor'
import ListItem from '@material-ui/core/ListItem'

// Data mock
import authors from './__mocks/db'

describe('Components', () => {
  describe('<ListAuthor />', () => {
    const props = {
      authors: authors
    }

    // Testing snapshot
    it('Render correctly ListAuthor component', () => {
      const ListAuthorComponent = shallow(
        <MemoryRouter keyLength={0}>
          <ListAuthor {...props} />
        </MemoryRouter>
      )

      expect(ListAuthorComponent).toMatchSnapshot()
    })

    // Testing props
    it(`Render correct items length: ${authors.length}`, () => {
      const ListAuthorComponent = mount(
        <MemoryRouter>
          <ListAuthor {...props} />
        </MemoryRouter>
      )

      expect(ListAuthorComponent.find(ListItem).length).toEqual(props.authors.length)
    })

    // Testing prop type
    it('Check prop types', () => {
      const ListAuthorComponent = mount(
        <MemoryRouter>
          <ListAuthor {...props} />
        </MemoryRouter>
      )

      expect(ListAuthorComponent.find(ListAuthor).props().authors).toBeArray()
    })
  })
})
