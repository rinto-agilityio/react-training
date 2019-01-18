// Libs
import React from 'react'
import { View, Text } from 'react-native'

// Helpers
import APP from '@constants/app'

// Styles
import { styles } from './styles/AppHeaderStyles'

const AppHeader = () => (
  <View style={styles.wrapper}>
    <Text style={styles.brand}>{APP.NAME}</Text>
  </View>
)

export default AppHeader
