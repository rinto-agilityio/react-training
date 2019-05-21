// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

// Components
import LoginForm from '.'

// define props
const props = {
  onSubmit: action('clicked'),
  setError: action('clicked'),
}

storiesOf('LoginForm', module)
  .add('default', () => (
    <View>
      <LoginForm {...props} />
    </View>
  ))
  .add('error', () => (
    <View>
      <LoginForm {...props} type="primary" error />
    </View>
  ))
