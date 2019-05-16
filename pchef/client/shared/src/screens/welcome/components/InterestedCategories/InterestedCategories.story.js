// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'
import { categories } from '../../../../mocks'

// Components
import InterestedCategories from '.'

// define props
const props = {
  onChooseCategory: action('clicked'),
  activeList: [categories[0].id, categories[1].id],
  categories,
}

storiesOf('InterestedCategories', module)
  .add('primary', () => (
    <View style={{ width: 400 }}>
      <InterestedCategories {...props} />
    </View>
  ))
  .add('secondary', () => (
    <View style={{ width: 800 }}>
      <InterestedCategories {...props} type="secondary" />
    </View>
  ))
