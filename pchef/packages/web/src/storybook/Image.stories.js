// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Image from 'components/src/components/Image'

storiesOf('Image', module)
  .add('Image enable', () => (
    <Image
      disabled={false}
      handleTouch={action('submited')}
      url="https://facebook.github.io/react-native/docs/assets/favicon.png"
      resizeMethod="auto"
    />
  ))

  .add('Image disable', () => (
    <Image
      disabled
      handleTouch={action('submited')}
      url="https://facebook.github.io/react-native/docs/assets/favicon.png"
      resizeMethod="resize"
    />
  ))
