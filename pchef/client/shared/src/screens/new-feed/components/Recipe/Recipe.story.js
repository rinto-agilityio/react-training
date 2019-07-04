// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Helpers
import { recipes } from '../../../../mocks'

// Components
import Recipe from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('New feed recipe', module)
  .addDecorator(wInfo())
  .add('Medium', () => (
    <Recipe size="medium" recipe={recipes[0]} favoriteRecipe={['idtest']} />
  ))
  .add('Large', () => (
    <Recipe size="large" recipe={recipes[0]} favoriteRecipe={['idtest']} />
  ))
