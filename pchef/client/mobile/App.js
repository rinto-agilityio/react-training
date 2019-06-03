import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { InMemoryCache } from 'apollo-cache-inmemory'
import AppRouter from '@router/index'
import { WebSocketLink } from 'apollo-link-ws'
import { createHttpLink } from 'apollo-link-http'
import { split } from 'apollo-link'
import { getMainDefinition } from 'apollo-utilities'
import AsyncStorage from '@react-native-community/async-storage'
import * as constants from '@constants/api'

// create web sockket link
const wsLink = new WebSocketLink({
  uri: constants.WS_URI,
  options: {
    reconnect: true,
    timeout: 30000,
  },
})

// create http link server
const httpLink = createHttpLink({
  uri: constants.SERVER_URI,
})

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query)
    return kind === 'OperationDefinition' && operation === 'subscription'
  },
  wsLink,
  httpLink,
)

// create client
const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  request: async operation => {
    const token = await AsyncStorage.getItem('token');

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
