// Libs
import React from 'react'
import { Text, View } from 'react-native'
import { storiesOf } from '@storybook/react'

// Themes
import { METRICS, COLORS } from '../../themes'

// Components
import ImageBackground from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('ImageBackground', module)
  .addDecorator(wInfo())
  .add('Text children', () => (
    <View
      style={{
        width: METRICS.largeBgImage,
        height: METRICS.largeBgImage,
      }}
    >
      <ImageBackground
        url="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg"
      >
        <Text style={{ color: COLORS.white }}>Text</Text>
      </ImageBackground>
    </View>
  ))
