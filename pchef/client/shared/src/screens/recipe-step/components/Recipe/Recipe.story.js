// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mocks
import { recipes, user } from '../../../../mocks'

const getUser = {
  favoriteRecipe: user.favoriteRecipe,
  user,
}
storiesOf('Recipe by step', module)
  .add('small', () => (
    <Recipe
      size="small"
      onPress={action('clicked')}
      getUser={getUser}
      votes={recipes[0].votes}
      recipeSteps={recipes[0].steps}
    />
  ))
  .add('medium', () => (
    <Recipe
      size="medium"
      onPress={action('clicked')}
      getUser={getUser}
      votes={recipes[0].votes}
      recipeSteps={recipes[0].steps}
    />
  ))
  .add('large', () => (
    <Recipe
      size="large"
      onPress={action('clicked')}
      getUser={getUser}
      votes={recipes[0].votes}
      recipeSteps={recipes[0].steps}
    />
  ))
