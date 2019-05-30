// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Helpers
import { recipes } from '../../../../mocks'

// Components
import Recipe from '.'

storiesOf('Profile recipe', module)
  .add('medium', () => (
    <Recipe size="medium" recipe={recipes[0]} favoriteRecipe={['idtest']} />
  ))
  .add('large', () => (
    <Recipe size="large" recipe={recipes[0]} favoriteRecipe={['idtest']} />
  ))
