/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useRef } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TextBox from './TextBox';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

function App() {
  const inputRef = useRef(null)
  const textareaRef = useRef(null)

  return (
    <View>
      <Text style={styles.welcome}>Welcome to React Native monorepo!</Text>
      <Text style={styles.instructions}>Test live reload on device</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <View>
        <TouchableOpacity
          title="Click me"
          onPress={() => alert(textareaRef.current && textareaRef.current._lastNativeText)}
        >
          <Text>Click</Text>
        </TouchableOpacity>
      </View>
      <TextBox refInput={inputRef} />
      <TextBox
        refInput={textareaRef}
        multiline={true}
      />
    </View>
  );
}

export default App

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
});
