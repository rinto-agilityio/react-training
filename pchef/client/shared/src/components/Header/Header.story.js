// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

// Component
import Header from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

const props = {
  onPressCategoryIcon: action('clicked category icon'),
  onPressLogo: action('clicked logo'),
}

storiesOf('New feed header', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <View style={{ width: 500, margin: 'auto' }}>
      <Header {...props} type="primary" />
    </View>
  ))
  .add('Secondary', () => (
    <Header {...props} onPressCategoryIcon size="secondary" />
  ))
