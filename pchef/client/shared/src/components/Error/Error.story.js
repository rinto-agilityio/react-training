// Libs
import React from 'react'
import { storiesOf } from '@storybook/react'

// Components
import { View } from 'react-native'
import Error from '.'

storiesOf('Error', module).add('default', () => (
  <View
    style={{
      marginTop: 50,
    }}
  >
    <Error errorMessage="Failed!!!" customStyle={{ textAlign: 'center' }} />
  </View>
))
