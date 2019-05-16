/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'

import {
  Provider as PaperProvider,
  Button as PaperButton,
} from 'react-native-paper'

// Apollo Client
// $FlowFixMe
import client from './config/apollo-client'

// Containers
import LoginContainer from './containers/Login'

type Props = {}

export default class App extends Component<Props> {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider>
          <View style={styles.container}>
            <Text style={styles.welcome}>Shared-components for both Web and Mobile</Text>
            <PaperButton mode="contained" onPress={() => {}}>
              PaperButton
            </PaperButton>
            <LoginContainer>
              {
                ({ signInUser }) => (
                  <PaperButton
                    mode="contained"
                    onPress={() => signInUser('user1@gmail.com', 'user1@pwd')}
                  >
                    SubmitLogin
                  </PaperButton>
                )
              }
            </LoginContainer>
          </View>
        </PaperProvider>
      </ApolloProvider>
    )
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})
