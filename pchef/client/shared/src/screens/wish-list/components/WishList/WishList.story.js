// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import WistList from '.'

// Mocks
import { recipe } from '../../../../mocks/recipe'

storiesOf('Wish list', module)
  .add('small', () => (
    <WistList
      size="small"
      wishList={[{
        id: 1,
        date: Date.now(),
        categoryId: 1,
        cookingTypeId: 1,
      },
      {
        id: 2,
        date: Date.now(),
        categoryId: 1,
        cookingTypeId: 1,
      }]}
    />
  ))
  .add('medium', () => (
    <WistList
      wishList={[{
        id: 1,
        date: Date.now(),
        categoryId: 1,
        cookingTypeId: 1,
      }]}
      size="medium"
    />
  ))
  .add('large', () => (
    <WistList
      size="large"
      wishList={[{
        id: 1,
        date: Date.now(),
        categoryId: 1,
        cookingTypeId: 1,
      }]}
    />
  ))
