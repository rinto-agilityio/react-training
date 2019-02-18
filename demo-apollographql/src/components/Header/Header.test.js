import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

// Components
import Header from './index'
import { StyledLink } from './Header.style'

const appTitle = 'GraphQL & React'

describe('Components', () => {
  describe('<Header />', () => {
    it(`Render correct app title`, () => {
      const wrapper = mount(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )

      expect(wrapper.find(StyledLink).filter({ to: '/'}).render().text()).toEqual(appTitle)
    })

    it('Render correct snapshot', () => {
      const tree = renderer
      .create(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
