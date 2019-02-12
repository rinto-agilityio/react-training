import React from 'react'
import { shallow } from 'enzyme'
import Loading from './Loading'

it('Check test running', () => {
  expect(1).toEqual(1)
})

it('Renders without crashring', () => {
  shallow(<Loading />)
})
