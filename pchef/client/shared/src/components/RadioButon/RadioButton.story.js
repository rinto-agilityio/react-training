// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import RadioButton from './index'

storiesOf('Radio Button', module)
  .add('checked', () => (
    <RadioButton
      value="first"
      onPress={action('checked')}
      label="First"
      status
    />
  ))

  .add('unchecked', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Second"
      status={false}
    />
  ))

  .add('disabled', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Disabled"
      disabled
    />
  ))
