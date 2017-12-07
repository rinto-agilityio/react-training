// Libs
import React from 'react'
import { View, Text } from 'react-native'

// Helpers
import { NAME } from '@constants/app'

// Styles
import { styles } from './styles/AppHeaderStyles'

const AppHeader = () => (
  <View style={styles.wrapper}>
    <Text style={styles.brand}>{NAME}</Text>
  </View>
)

export default AppHeader
