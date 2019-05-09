/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import Recipe from '../screens/category/components/Recipe'
import Header from '../screens/new-feed/components/Header'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
})

type Props = {
  size?: string
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
export default class App extends Component<Props> {
  static defaultProps = {
    size: 'medium',
  }

  render() {
    const { size } = this.props;
    return (
      <View style={styles.container}>
        <Button title="Test RNE Button" onPress={() => {}} />
        <Recipe
          size={size}
          image="https://vcdn-ngoisao.vnecdn.net/2018/01/19/1-8515-1516314392.jpg" // eslint-disable-line
          title="Bun Bo Hue Recipe"
          description="2lb pork neck bones, 2lb beef bones, 1lb oxtail"
        />
        <Text style={styles.welcome}>Welcome to React Native monorepo!</Text>
        <Text style={styles.instructions}>Test live reload on device</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    )
  }
}
