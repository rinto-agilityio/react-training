/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { ApolloProvider } from 'react-apollo'
import { Provider as PaperProvider } from 'react-native-paper'

// Apollo Client
// $FlowFixMe
import client from './config/apollo-client'

// Containers
import LoginContainer from './containers/Login'

// Styles
import styles from './AppStyle'

type AppProps = {}

export default class App extends Component<AppProps> {
  // save token and navigation to home screen
  handlingLoginSuccess = (token: string) => {
    localStorage.setItem('token', token)
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
          </View>
        </PaperProvider>
      </ApolloProvider>
    )
  }
}
