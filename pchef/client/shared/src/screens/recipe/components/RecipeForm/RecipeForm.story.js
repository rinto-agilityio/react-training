// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { MockedProvider } from 'react-apollo/test-utils'

// Components
import RecipeForm from '.'

storiesOf('Recipe form', module)
  .add('small', () => (
    <MockedProvider>
      <RecipeForm
        size="small"
        handleAddRecipeImage={action('clicked')}
        createRecipe={action('clicked')}
      />
    </MockedProvider>
  ))
  // .add('medium', () => (
  //   <RecipeForm
  //     size="medium"
  //     handleAddRecipeImage={action('clicked')}
  //     createRecipe={action('clicked')}
  //   />
  // ))
  // .add('large', () => (
  //   <RecipeForm
  //     size="large"
  //     handleAddRecipeImage={action('clicked')}
  //     createRecipe={action('clicked')}
  //   />
  // ))
