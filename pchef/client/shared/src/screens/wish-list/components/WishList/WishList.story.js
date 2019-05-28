// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WistList from '.'

// Mocks
import { wishList, categories, cookingTypes } from '../../../../mocks'

storiesOf('Wish list', module)
  .add('small', () => (
    <WistList
      size="small"
      wishList={wishList}
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
  .add('medium', () => (
    <WistList
      wishList={wishList}
      size="medium"
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
  .add('large', () => (
    <WistList
      size="large"
      wishList={wishList}
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
