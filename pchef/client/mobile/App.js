// Libs
import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import AsyncStorage from '@react-native-community/async-storage'

// Router
import AppRouter from '@router/index'

// Constants
import * as constants from '@constants/api'

const client = new ApolloClient({
  uri: constants.SERVER_URI,
  request: async operation => {
    const token = await AsyncStorage.getItem('token')

    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
})

// app
const App = () => (
  <ApolloProvider client={client}>
    <AppRouter />
  </ApolloProvider>
)

export default App
