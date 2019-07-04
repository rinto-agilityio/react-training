// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

// Component
import RadioButton from './index'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Radio Button', module)
  .addDecorator(wInfo())
  .add('Checked', () => (
    <RadioButton
      value="first"
      onPress={action('checked')}
      label="First"
      status
    />
  ))

  .add('Unchecked', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Second"
      status={false}
    />
  ))

  .add('Disabled', () => (
    <RadioButton
      value="second"
      onPress={action('checked')}
      label="Disabled"
      disabled
    />
  ))
