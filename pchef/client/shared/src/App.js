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

import { Provider as PaperProvider } from 'react-native-paper'

// Apollo Client
// $FlowFixMe
import client from './config/apollo-client'

// Containers
import LoginContainer from './containers/Login'
import CategoryContainer from './containers/Category'

type AppProps = {}

export default class App extends Component<AppProps> {
  // save token and navigation to home screen
  handlingLoginSuccess = (token: string) => {
    localStorage.setItem('token', token)
    // history.push('/home')
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider>
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Shared-components for both Web and Mobile
            </Text>
            <LoginContainer
              type="secondary"
              handlingLoginSuccess={this.handlingLoginSuccess}
            />

            {<CategoryContainer id="2uAi2sb1IkPxpKPzvDNn" />}
          </View>
        </PaperProvider>
      </ApolloProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
