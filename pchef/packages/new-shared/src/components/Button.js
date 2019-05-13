/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { Provider as PaperProvider, Button as PaperButton } from 'react-native-paper';

type Props = {};
export default class CustomButton extends Component<Props> {
  render() {
    return (
      <PaperProvider>
        <View style={styles.container}>
          <PaperButton
            mode="contained"
            onPress={() => console.log('PaperButton')}
          >
            PaperButton
          </PaperButton>
        </View>
      </PaperProvider>
    );
  }
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
});
