// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import WistList from '.'

// Mocks
import { wishList } from '../../../../mocks/wish-list'

storiesOf('Wish list', module)
  .add('small', () => (
    <WistList
      size="small"
      wishList={wishList}
    />
  ))
  .add('medium', () => (
    <WistList
      wishList={wishList}
      size="medium"
    />
  ))
  .add('large', () => (
    <WistList
      size="large"
      wishList={wishList}
    />
  ))
