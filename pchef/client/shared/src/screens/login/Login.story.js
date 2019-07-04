// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

// Components
import LoginForm from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

// define props
const props = {
  handlingLoginSuccess: action('clicked'),
  signInUser: action('clicked'),
}

storiesOf('Login Screen', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <View style={{ height: 500 }}>
      <LoginForm {...props} type="primary" />
    </View>
  ))
  .add('Secondary', () => (
    <View style={{ height: 800 }}>
      <LoginForm {...props} type="secondary" />
    </View>
  ))
