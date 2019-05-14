// libs
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM()

// define global variable to use for all file test in app
global.React = React;
global.renderer = renderer;
global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}
