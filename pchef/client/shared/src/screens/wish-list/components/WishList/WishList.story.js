// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WistList from '.'

// Mocks
import { wishList } from '../../../../mocks'

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
