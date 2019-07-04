// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipes } from '../../../../mocks'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

storiesOf('Recipe', module)
  .addDecorator(wInfo())
  .add('Small', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="small"
      onSelectStep={action('clicked')}
    />
  ))
  .add('Medium', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="medium"
      onSelectStep={action('clicked')}
    />
  ))
  .add('Large', () => (
    <Recipe
      recipe={recipes[0]}
      recipeSteps={recipes[0].steps}
      size="large"
      onSelectStep={action('clicked')}
    />
  ))
