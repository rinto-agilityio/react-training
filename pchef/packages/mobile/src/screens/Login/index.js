import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import App from '../../../../shared/src/components/App'

// define Login page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// Login
const Login = () => (
  <View style={styles.container}>
    <App />
    <Text>test</Text>
  </View>
)

export default Login
