// libs
import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer'
import { JSDOM } from 'jsdom'
import { configure, shallow, mount } from 'enzyme'

const { window } = new JSDOM()
configure({ adapter: new Adapter() })

// define global variable to use for all file test in app
global.React = React
global.renderer = renderer
global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
global.shallow = shallow
global.mount = mount
