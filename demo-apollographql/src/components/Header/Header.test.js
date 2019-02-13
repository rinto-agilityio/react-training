import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'

// Components
import Header from './index'
import { StyledLink } from './Header.style'

const appTitle = 'GraphQL & React'

describe('Components', () => {
  describe('<Header />', () => {
    it.only(`Render correct app title`, () => {
      const wrapper = mount(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )

      expect(wrapper.find(StyledLink).filter({ to: '/'}).render().text()).toEqual(appTitle)
    })
  })
})
