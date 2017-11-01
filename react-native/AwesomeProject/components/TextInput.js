import React from 'react'
import { Text, TextInput, View } from 'react-native'

export default class TextTranslator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '' }
  }

  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 36}}>
          {this.state.text.split(' ').map((word) => word && '*').join(' ')}
        </Text>
      </View>
    )
  }
}
