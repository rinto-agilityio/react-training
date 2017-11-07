import React from 'react'
import { NavigatorIOS, Text, View, TouchableHighlight } from 'react-native'

class MyScene extends React.Component {
  _onForward = () => {
    this.props.navigator.push({
      title: 'Scene ' + nextIndex
    })
  }

  render() {
    return (
      <View>
        <Text>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
export default class NavigatorIOSApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: MyScene,
          title: 'My Initial Scene'
        }}
        style={{flex: 1}}
      />
    )
  }
}
