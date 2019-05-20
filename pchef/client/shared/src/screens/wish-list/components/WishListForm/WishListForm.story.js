// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WishListForm from '.'

storiesOf('Wish list form', module)
  .add('small', () => (
    <WishListForm size="small" />
  ))
  .add('medium', () => (
    <WishListForm size="medium" />
  ))
  .add('large', () => (
    <WishListForm size="large" />
  ))
