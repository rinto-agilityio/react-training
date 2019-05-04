import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles'
const Layout = ({ children, type, size }) => {
  return (
    <View style={[
      styles.flex,
      styles[type],
      styles[size]
    ]}>
      <Text>Layout component 0</Text>
      <Text>Layout component 1</Text>
      <Text>Layout component 2</Text>
      {children}    
    </View>
  )
}

export default Layout
