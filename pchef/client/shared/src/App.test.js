/**
 * @format
 */

import 'react-native'
import React from 'react'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'

// Components
import App from './App'

it('renders correctly', () => {
  renderer.create(<App />)
})
