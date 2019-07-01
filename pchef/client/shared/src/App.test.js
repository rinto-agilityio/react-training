/**
 * @format
 */

import 'react-native'
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import App from './App'

it('renders correctly', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})
