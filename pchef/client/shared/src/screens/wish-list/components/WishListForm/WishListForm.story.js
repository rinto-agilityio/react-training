// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WistListForm from '.'

storiesOf('Wish list form', module)
  .add('small', () => (
    <WistListForm size="small" />
  ))
  .add('medium', () => (
    <WistListForm size="medium" />
  ))
  .add('large', () => (
    <WistListForm size="large" />
  ))
