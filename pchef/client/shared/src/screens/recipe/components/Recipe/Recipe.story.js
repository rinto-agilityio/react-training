// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipe } from '../../../../mocks/recipe'

storiesOf('Recipe', module)
  .add('small', () => (
    <Recipe
      recipe={recipe}
      size="small"
      onSelectStep={action('clicked')}
    />
  ))
  .add('medium', () => (
    <Recipe
      recipe={recipe}
      size="medium"
      onSelectStep={action('clicked')}
    />
  ))
  .add('large', () => (
    <Recipe
      recipe={recipe}
      size="large"
      onSelectStep={action('clicked')}
    />
  ))
