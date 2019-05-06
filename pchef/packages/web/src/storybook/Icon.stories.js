// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import Icon from 'shared/src/components/Icon'

storiesOf('Icon', module)
  .add('Have label', () => (
    <Icon
      label="Label"
      onClick={action('clicked')}
    />
  ))

  .add('Without label', () => (
    <Icon
      onClick={action('clicked')}
    />
  ))
