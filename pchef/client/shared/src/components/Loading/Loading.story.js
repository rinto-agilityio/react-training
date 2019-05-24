// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Indicator from '.'

storiesOf('Indicator', module)
  .add('small', () => (
    <Indicator size="small" />
  ))
  .add('large', () => (
    <Indicator size="large" />
  ))
