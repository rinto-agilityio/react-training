// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipes } from '../../../../mocks'

const recipe = recipes[0]
storiesOf('Recipe by step', module)
  .add('small', () => (
    <Recipe
      stepInfo={recipe.steps[0]}
      recipe={recipe}
      size="small"
      onPress={action('clicked')}
    />
  ))
  .add('medium', () => (
    <Recipe
      stepInfo={recipe.steps[0]}
      recipe={recipe}
      size="medium"
      onPress={action('clicked')}
    />
  ))
  .add('large', () => (
    <Recipe
      stepInfo={recipe.steps[0]}
      recipe={recipe}
      size="large"
      onPress={action('clicked')}
    />
  ))
