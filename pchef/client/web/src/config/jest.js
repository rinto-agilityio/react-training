import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme'

configure({ adapter: new Adapter() })

// // Ignore React Web errors
// eslint-disable-next-line no-console
console.error = message => message

global.React = React
global.shallow = shallow
global.renderer = renderer
global.mount = mount
