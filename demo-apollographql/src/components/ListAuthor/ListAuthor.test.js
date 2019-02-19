import React from 'react'
import { shallow } from 'enzyme'
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
    let wrapper

    beforeEach(() => {
      wrapper = shallow(
        <MemoryRouter keyLength={0}>
          <ListAuthor authors={authors} />
        </MemoryRouter>
      )
    })

    it('Render correctly ListAuthor component', () => {
      expect(wrapper).toMatchSnapshot()
    })

    it('Render correct title', () => {
      expect(wrapper.find(Typography).render().text()).toEqual(componentTitle)
    })

    it('Render correct child elements: Title and List', () => {
      expect(wrapper.find(StyledCard).children().length).toEqual(2)
    })

    it(`Render correct items length: ${authors.length}`, () => {
      expect(wrapper.find(ListItem).length).toEqual(authors.length)
    })
  })
})
