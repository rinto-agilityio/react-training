import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'

// Component
import LoginContainer from 'pchef-shared/src/containers/Login'

type Props = {
  navigation: {
    navigate: (name: string) => void,
  },
}
// Login
const Login = ({ navigation }: Props) => {
  // save token and navigation to home screen
  const handlingLoginSuccess = async (token: string) => {
    await AsyncStorage.setItem('token', token)
    navigation.navigate('Home')
  }

  return (
    <LoginContainer handlingLoginSuccess={handlingLoginSuccess} />
  )
}

export default Login
