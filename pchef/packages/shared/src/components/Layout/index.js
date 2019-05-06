import React from 'react';
import { View, Text } from 'react-native';

// Styles
import styles from './styles'
const Layout = ({ children, type, size, position }) => {
  return (
    <View style={[
      styles.container,
      styles[type],
      styles[size],
      styles[position]
    ]}>
      {children}    
    </View>
  )
}

Layout.defaultProps = {
  children: {},
  type: '',
  size: '',
  position: ''
}

export default Layout
