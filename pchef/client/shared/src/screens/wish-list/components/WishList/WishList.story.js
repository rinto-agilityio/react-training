// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import WistList from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

// Mocks
import { wishList, categories, cookingTypes } from '../../../../mocks'

storiesOf('Wish list', module)
  .addDecorator(wInfo())
  .add('Small', () => (
    <WistList
      size="small"
      wishList={wishList}
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
  .add('Medium', () => (
    <WistList
      wishList={wishList}
      size="medium"
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
  .add('Large', () => (
    <WistList
      size="large"
      wishList={wishList}
      categories={categories}
      cookingTypes={cookingTypes}
    />
  ))
