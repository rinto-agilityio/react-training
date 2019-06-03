// Libs
import React, { Component } from 'react'
import AsyncStorage from '@react-native-community/async-storage'

// Components
import Loading from 'pchef-shared/src/components/Loading'

type Props = {
  navigation: {
    navigate: (name: string) => void,
  },
}
class AuthLoading extends Component<Props> {
  constructor() {
    super()
    this.handleNavigateScreen()
  }

  handleNavigateScreen = async () => {
    // Fetch the token from storage then navigate to our appropriate place
    const token = await AsyncStorage.getItem('token')
    const { navigation } = this.props

    // This will switch to the PrivateNav screen or PublicNav screen and this loading
    // screen will be unmounted and thrown away.
    navigation.navigate(token ? 'PrivateNav' : 'PublicNav')
  };


  render() {
    return (
      <Loading size="large" />
    )
  }
}

export default AuthLoading
