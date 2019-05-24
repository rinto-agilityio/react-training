// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { View } from 'react-native'
import Loading from '.'

// Themes
import { COLORS } from '../../themes'

storiesOf('Loading', module)
  .add('default', () => (
    <View
      style={{
        marginTop: 50,
      }}
    >
      <Loading />
    </View>
  ))
  .add('custom', () => (
    <View
      style={{
        marginTop: 50,
      }}
    >
      <Loading color={COLORS.blue} size="small" />
    </View>
  ))
