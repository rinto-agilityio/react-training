// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipes, user } from '../../../../mocks'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

const getUser = {
  favoriteRecipe: user.favoriteRecipe,
  user,
}

const getRecipe = {
  votes: recipes[0].votes,
}

storiesOf('Recipe by step', module)
  .addDecorator(wInfo())
  .add('Small', () => (
    <Recipe
      size="small"
      onPress={action('clicked')}
      getUser={getUser}
      getRecipe={getRecipe}
      recipeSteps={recipes[0].steps}
    />
  ))
  .add('Medium', () => (
    <Recipe
      size="medium"
      onPress={action('clicked')}
      getUser={getUser}
      getRecipe={getRecipe}
      recipeSteps={recipes[0].steps}
    />
  ))
  .add('Large', () => (
    <Recipe
      size="large"
      onPress={action('clicked')}
      getUser={getUser}
      getRecipe={getRecipe}
      recipeSteps={recipes[0].steps}
    />
  ))
