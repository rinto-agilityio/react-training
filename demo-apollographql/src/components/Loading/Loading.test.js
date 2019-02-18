import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

// Components
import Loading from './index'

describe('Components', () => {
  describe('<Loading />', () => {
    it('Snapshot renders correctly', () => {
      const tree = renderer
        .create(<Loading />)
        .toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('Renders without crashring', () => {
      shallow(<Loading />)
    })
  })
})
