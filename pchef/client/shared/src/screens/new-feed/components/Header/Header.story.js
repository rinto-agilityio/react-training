// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Component
import Header from '.'

storiesOf('New feed header', module)
  .add('medium', () => (
    <Header
      size="medium"
      image="http://www.kptncook.com/assets/downloads/AppIcon/KptnCook_AppIcon.png"
    />
  ))
  .add('large', () => (
    <Header
      size="large"
      image="http://www.kptncook.com/assets/downloads/AppIcon/KptnCook_AppIcon.png"
    />
  ))
