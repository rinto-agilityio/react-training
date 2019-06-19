import React from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { NavigationScreenProps } from 'react-navigation'

// Component
import LoginContainer from 'pchef-shared/src/containers/Login'

// Constants
import ROUTES from '@constants/routes'

type Props = {
  navigation: NavigationScreenProps,
}
// Login
const Login = ({ navigation }: Props) => {
  // save token and navigation to home screen
  const handlingLoginSuccess = async (token: string) => {
    await AsyncStorage.setItem('token', token)
    navigation.navigate(ROUTES.HOME)
  }

  return (
    <LoginContainer
      handlingLoginSuccess={handlingLoginSuccess}
      handleNavigateHome={() => navigation.navigate(ROUTES.HOME)}
      handleNavigateWelcome={() => navigation.navigate(ROUTES.WELCOME)}
    />
  )
}

export default Login
