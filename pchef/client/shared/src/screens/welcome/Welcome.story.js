// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { categories } from '../../mocks'

// Helper
import { wInfo } from '../../../.storybook/utils';

// Components
import Welcome from '.'

// define props
const props = {
  onChooseCategories: action('clicked'),
  categories,
}

storiesOf('Welcome', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <View style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Welcome {...props} />
    </View>
  ))
  .add('Secondary', () => (
    <View>
      <Welcome {...props} type="secondary" />
    </View>
  ))
