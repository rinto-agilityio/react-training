// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mock
import { recipes } from '../../../../mocks'

storiesOf('Recipe in category', module).add('default', () => (
  <Recipe
    recipe={recipes[0]}
    size="small"
    handlePressImage={action('press image')}
    handlePressIcon={action('press icon')}
  />
))
