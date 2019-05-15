import React from 'react'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'

// Components
import Header from './Header'
import { StyledLink } from './Header.style'

const appTitle = 'GraphQL & React'

describe('Components', () => {
  describe('<Header />', () => {
    // Testing snapshot
    it('Snapshot renders correctly', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })

    // Testing props
    it('Render site title correctly', () => {
      const props = {
              siteTitle: 'Demo React app'
            },
            HeaderComponent = mount(
              <MemoryRouter>
                <Header {...props} />
              </MemoryRouter>
            )

      expect(HeaderComponent.find(StyledLink).render().text()).toEqual(props.siteTitle)
    })

    // Testing props
    it('Render site title default', () => {
      // This should be config somewhere
      const siteTitleDefault = 'GraphQL & React',
        HeaderComponent = mount(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        )

      expect(HeaderComponent.find(StyledLink).render().text()).toEqual(siteTitleDefault)
    })

    // Testing proptypes
    it('Check prop type for title is string', () => {
      const props = {
              siteTitle: 'String site title'
            },
            HeaderComponent = mount(
              <MemoryRouter>
                <Header {...props} />
              </MemoryRouter>
            )

      expect(HeaderComponent.find('a').text()).toBeString()
    })
  })
})