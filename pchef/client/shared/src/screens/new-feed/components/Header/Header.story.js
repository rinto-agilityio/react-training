// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Header from '.'

const image = 'http://www.kptncook.com/assets/downloads/AppIcon/KptnCook_AppIcon.png'

storiesOf('New feed header', module)
  .add('medium', () => (
    <Header
      size="medium"
      image={image}
    />
  ))
  .add('large', () => (
    <Header
      size="large"
      image={image}
    />
  ))
