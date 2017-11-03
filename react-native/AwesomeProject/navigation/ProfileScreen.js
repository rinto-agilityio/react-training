import React from 'react'
import { Button } from 'react-native'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen'
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Button
        title="Go back to HomeScreen"
        onPress={
          () => navigate('Home')
        }
      />
    )
  }
}
