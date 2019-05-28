// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipes } from '../../../../mocks'

storiesOf('Recipe', module)
  .add('small', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="small"
      onSelectStep={action('clicked')}
    />
  ))
  .add('medium', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="medium"
      onSelectStep={action('clicked')}
    />
  ))
  .add('large', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="large"
      onSelectStep={action('clicked')}
    />
  ))
