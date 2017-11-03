import React from 'react'
import { Button } from 'react-native'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home Screen'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Button
        title="Go to ProfileScreen"
        onPress={
          () => navigate('Profile')
        }
      />
    )
  }
}
