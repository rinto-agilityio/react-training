import React from 'react'
import { shallow, mount } from 'enzyme'

// Data mock
import { authors } from '../../../../../server/db'

// Components
import Info from './Info'

describe('Component', () => {
  describe('Info', () => {
    const props = {
            name: authors[0].name,
            photo: authors[0].photo,
            bio: authors[0].desc,
          },
          InfoComponent = mount(<Info {...props} />)

    // Testing snapshot
    it('Render correctly Info component', () => {
      const InfoComponentSnapshot = shallow(<Info {...props} />)

      expect(InfoComponentSnapshot).toMatchSnapshot()
    })

    // Testing props
    it('Render correctly author name', () => {
      // Section title stay at the first node
      expect(InfoComponent.find('h1').length).toEqual(1)
      expect(InfoComponent.find('h1').text()).toEqual(props.name)
    })

    // // Testing prop-type
    it('Check prop-type', () => {
      expect(InfoComponent.props().name).toBeString()
      expect(InfoComponent.props().photo).toBeString()
      expect(InfoComponent.props().bio).toBeString()
    })
  })
})
