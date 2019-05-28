// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

// Component
import Header from '.'

const props = {
  onPressCategoryIcon: action('clicked category icon'),
  onPressLogo: action('clicked logo'),
}

storiesOf('New feed header', module)
  .add('primary', () => (
    <View style={{ width: 500, margin: 'auto' }}>
      <Header {...props} type="primary" />
    </View>
  ))
  .add('secondary', () => (
    <Header {...props} onPressCategoryIcon size="secondary" />
  ))
