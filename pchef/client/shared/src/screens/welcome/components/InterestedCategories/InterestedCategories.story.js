// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'
import { View } from 'react-native'
import { action } from '@storybook/addon-actions'

import { categories } from '../../../../mocks'

// Helper
import { wInfo } from '../../../../../.storybook/utils';

// Components
import InterestedCategories from '.'

// define props
const props = {
  onChooseCategory: action('clicked'),
  activeList: [categories[0].id, categories[1].id],
  categories,
}

storiesOf('InterestedCategories', module)
  .addDecorator(wInfo())
  .add('Primary', () => (
    <View style={{ width: 400 }}>
      <InterestedCategories {...props} />
    </View>
  ))
  .add('Secondary', () => (
    <View style={{ width: 800 }}>
      <InterestedCategories {...props} type="secondary" />
    </View>
  ))
