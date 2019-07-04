// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WishListForm from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('Wish list form', module)
  .addDecorator(wInfo())
  .add('small', () => (
    <WishListForm size="small" />
  ))
  .add('medium', () => (
    <WishListForm size="medium" />
  ))
  .add('large', () => (
    <WishListForm size="large" />
  ))
