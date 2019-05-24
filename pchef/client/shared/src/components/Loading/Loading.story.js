// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import Loading from '.'

storiesOf('Loading', module)
  .add('small', () => (
    <Loading size="small" />
  ))
  .add('large', () => (
    <Loading size="large" />
  ))
