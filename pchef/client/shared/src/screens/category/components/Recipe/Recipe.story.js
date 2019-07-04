// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Components
import Recipe from '.'

// Mock
import { recipes } from '../../../../mocks'

// Helper
import { wInfo } from '../../../../../.storybook/utils';


storiesOf('Recipe in category', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <Recipe
      recipe={recipes[0]}
      size="small"
      handlePressImage={action('press image')}
      handlePressIcon={action('press icon')}
    />
  ))
