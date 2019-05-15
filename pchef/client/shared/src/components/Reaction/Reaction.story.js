// Libs
import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react'

// Themes
import { METRICS } from '../../themes'

// Components
import Reaction from '.'

storiesOf('Reaction', module)
  .add('favorited', () => (
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
  .add('not favorited', () => (
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
