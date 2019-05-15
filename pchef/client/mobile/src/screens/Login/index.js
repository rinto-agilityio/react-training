import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

// Component
import BtnPaper from 'pchef-shared/src/components/Button'

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
    <Text>This is login screen</Text>
    <BtnPaper
      onPress={() => console.log('Press BtnPaper')}
      title="BtnPaper"
    />
  </View>
)

export default Login
