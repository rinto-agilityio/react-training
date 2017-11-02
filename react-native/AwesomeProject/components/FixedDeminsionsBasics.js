import React from 'react'
import { View } from 'react-native'

export default class FixedDeminsionsBasics extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        <View style={{flex: 7, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}
