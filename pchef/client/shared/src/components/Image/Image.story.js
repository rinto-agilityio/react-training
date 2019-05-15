// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Image from '.'

storiesOf('Image', module)
  .add('default', () => (
    <Image
      url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      handleTouch={action('clicked')}
    />
  ))
  .add('disabled', () => (
    <Image
      url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      disabled
    />
  ))
