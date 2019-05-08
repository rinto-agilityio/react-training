import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// Component
import LoginForm from '../../../../shared/src/screens/Login/LoginForm'

// define Login page styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

// Login
const Login = () => (
  <View style={styles.container}>
    <Text>test</Text>
    <View>
      <LoginForm />
    </View>
  </View>
)

export default Login
