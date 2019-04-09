import React from 'react';
import Home from './Home';
import '../../setupTests'

describe('Home Component', () => {
  let component = shallow(<Home />)
  it('renders button component', () => {
    expect(component).toMatchSnapshot()
  })
})
