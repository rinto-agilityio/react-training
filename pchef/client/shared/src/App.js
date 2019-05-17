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

type LoginProps = {
  submitLogin: (email: string, password: string) => any
}

const LoginComponent = ({ submitLogin }: LoginProps) => {
  /**
   * This is sample function, should be implment for each platform
   * Set token in localStorage for web platform / mobile
   * ApolloClient header will get this token and update to request headers
   */
  const _signInUser = async () => {
    try {
      // TODO: This is sample user, this data should get from input
      await submitLogin('user1@gmail.com', 'user1@pwd')
        .then(({ data }) => {
          const { signInUser: { token } } = data

          if (token) {
            localStorage.setItem('token', token)
          }
        })
    } catch (err) {
      console.log('signInUser err: ', err)
    }
  }

  return (
    <View>
      <Text>Login Component</Text>
      <PaperButton
        mode="contained"
        onPress={_signInUser}
      >
        SubmitLogin
      </PaperButton>
    </View>
  )
}

type AppProps = {}

export default class App extends Component<AppProps> {
  render() {
    return (
      <ApolloProvider client={client}>
        <PaperProvider>
          <View style={styles.container}>
            <Text style={styles.welcome}>Shared-components for both Web and Mobile</Text>
            <LoginContainer>
              {
                ({ signInUser }) => (
                  <LoginComponent
                    submitLogin={signInUser}
                  />
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
