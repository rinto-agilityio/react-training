// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import RecipeForm from '.'

// Mocks
import { recipes } from '../../../../mocks'

storiesOf('Recipe form', module)
  .add('small', () => (
    <RecipeForm
      recipe={recipes[0]}
      size="small"
      onSelectStep={action('clicked')}
    />
  ))
  .add('medium', () => (
    <RecipeForm
      recipe={recipes[0]}
      size="medium"
      onSelectStep={action('clicked')}
    />
  ))
  .add('large', () => (
    <RecipeForm
      recipe={recipes[0]}
      size="large"
      onSelectStep={action('clicked')}
    />
  ))
