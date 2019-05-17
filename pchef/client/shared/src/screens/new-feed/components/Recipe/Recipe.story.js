// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Helpers
import { recipe } from '../../../../mocks/recipe'

// Components
import Recipe from '.'

storiesOf('New feed recipe', module)
  .add('medium', () => (
    <Recipe
      size="medium"
      recipe={recipe}
    />
  ))
  .add('large', () => (
    <Recipe
      size="large"
      recipe={recipe}
    />
  ))
