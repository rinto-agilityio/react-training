import React from 'react'
import { Button, View, Text } from 'react-native'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile Screen'
  }

  render() {
    const { navigate } = this.props.navigation
    const { params } = this.props.navigation.state

    return (
      <View>
        <Text>Chat with {params.user}</Text>
        <Button
          title="Go back to HomeScreen"
          onPress={
            () => navigate('Home')
          }
        />
      </View>
    )
  }
}
