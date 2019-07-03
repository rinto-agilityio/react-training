//@flow
import React from 'react'
import { configure } from '@storybook/react'
import { setDefaults } from "@storybook/addon-info";

/**
 * Config Font for react-native-vector-icons
 * https://github.com/storybooks/storybook/issues/4208
 */

// addon-info
setDefaults({
  header: true, // Toggles display of header with component name and description
  inline: true, // Displays info inline vs component to view
  source: true, // Displays the source of story Component
});
 
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
