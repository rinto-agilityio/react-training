// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { View } from 'react-native'
import Error from '.'

// Helper
import { wInfo } from '../../../.storybook/utils';

storiesOf('Error', module)
  .addDecorator(wInfo())
  .add('Default', () => (
    <View
      style={{
        marginTop: 50,
      }}
    >
      <Error message="Failed!!!" customStyle={{ textAlign: 'center' }} />
    </View>
  ))
