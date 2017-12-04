// Libs
import React from 'react'
import { View, Text } from 'react-native'

// Helpers
import { APP_NAME } from '@constants'

// Styles
import { styles } from './styles/AppHeaderStyles'

const AppHeader = () => (
  <View style={styles.wrapper}>
    <Text style={styles.brand}>{APP_NAME}</Text>
  </View>
)

export default AppHeader
