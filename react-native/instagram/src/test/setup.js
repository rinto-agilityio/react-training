// Libs
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Configs and mock
import 'firebase/storage'
import './__mocks__/react-native-fetch-blob'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Setup global variables to avoid duplicated import in *.test.js files
global.React = React
global.renderer = renderer
global.shallow = shallow
