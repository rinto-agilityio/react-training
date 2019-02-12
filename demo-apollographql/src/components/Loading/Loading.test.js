import React from 'react'
import { shallow } from 'enzyme'
import Loading from './index'

describe('Components', () => {
  describe('Loading', () => {
    it('Renders without crashring', () => {
      shallow(<Loading />)
    })
  })
})

