import React from 'react'
import { shallow, mount } from 'enzyme'
import renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

// Components
import ListAuthor from './index'
import { StyledCard } from './ListAuthor.style'
import ListItem from '@material-ui/core/ListItem'
import Typography from '@material-ui/core/Typography'

// Data mock
import authors from './__mocks/db'

const componentTitle = 'Top Authors'

describe('Components', () => {
  describe('<ListAuthor />', () => {
    const props = {
      title: 'ListAuthor title',
      authors: authors
    }

    it('Render correctly ListAuthor component', () => {
      const ListAuthorComponent = shallow(
        <MemoryRouter keyLength={0}>
          <ListAuthor {...props} />
        </MemoryRouter>
      )

      expect(ListAuthorComponent).toMatchSnapshot()
    })

    // it('Render correct title', () => {
    //   const ListAuthorComponent = mount(
    //     <MemoryRouter>
    //       <ListAuthor {...props} />
    //     </MemoryRouter>
    //   )

    //   expect(wrapper.find('h3').render().text()).toEqual(props.title)
    // })

    // it('Render correct child elements: Title and List', () => {
    //   expect(wrapper.find(StyledCard).children().length).toEqual(2)
    // })

    // it(`Render correct items length: ${authors.length}`, () => {
    //   expect(wrapper.find(ListItem).length).toEqual(authors.length)
    // })
  })
})
