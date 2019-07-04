// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

// Components
import LoginForm from '.'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

// define props
const props = {
  onSubmit: action('clicked'),
  setError: action('clicked'),
}

storiesOf('LoginForm', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <View>
      <LoginForm {...props} />
    </View>
  ))
  .add('Error', () => (
    <View>
      <LoginForm {...props} type="primary" error />
    </View>
  ))
