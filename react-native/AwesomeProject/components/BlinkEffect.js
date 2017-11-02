import React from 'react'
import { View, Text } from 'react-native'

class Blink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {showText: true}

    setInterval(() => {
      this.setState(previousState => {
        return { showText: !previousState.showText }
      })
    }, 1000)
  }

  render() {
    let display = this.state.showText ? this.props.text : ''
    return (
      <Text>{display}</Text>
    )
  }
}

export default class BlinkEffect extends React.Component {
  render() {
    return (
      <View>
        <Blink text='This is first blink text' />
        <Blink text='This is second blink text' />
      </View>
    )
  }
}
