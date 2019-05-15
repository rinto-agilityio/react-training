import React from 'react'
import { configure } from '@storybook/react'

/**
 * Config Font for react-native-vector-icons
 * https://github.com/storybooks/storybook/issues/4208
 */

// Generate required css
const iconFont = require('react-native-vector-icons/Fonts/FontAwesome.ttf')
const iconFontStyles = `@font-face {
  src: url(${iconFont});
  font-family: FontAwesome;
}`

const req = require.context('../src', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)

// Create stylesheet
const style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles
} else {
  style.appendChild(document.createTextNode(iconFontStyles))
}

// Inject stylesheet
document.head.appendChild(style)
