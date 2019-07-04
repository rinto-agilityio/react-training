// Libs
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react'

// Themes
import { METRICS } from '../../themes'

// Components
import Reaction from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Reaction', module)
  .addDecorator(wInfo())
  .add('Favorited', () => (
    <View
      style={{
        width: METRICS.largeBgImage,
        height: METRICS.largeBgImage,
      }}
    >
      <Reaction
        votes={[1]}
        size="medium"
        isFavorited
      />
    </View>
  ))
  .add('Not favorited', () => (
    <View
      style={{
        width: METRICS.largeBgImage,
        height: METRICS.largeBgImage,
      }}
    >
      <Reaction
        votes={[1]}
        size="medium"
      />
    </View>
  ))
