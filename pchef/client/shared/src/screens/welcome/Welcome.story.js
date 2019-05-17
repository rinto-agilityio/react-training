// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { categories } from '../../mocks'

// Components
import Welcome from '.'

// define props
const props = {
  onChooseCategories: action('clicked'),
  categories,
}

storiesOf('Welcome', module)
  .add('primary', () => (
    <View style={{ width: 400, marginLeft: 'auto', marginRight: 'auto' }}>
      <Welcome {...props} />
    </View>
  ))
  .add('secondary', () => (
    <View>
      <Welcome {...props} type="secondary" />
    </View>
  ))
