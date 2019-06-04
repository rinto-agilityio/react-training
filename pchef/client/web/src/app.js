// Libs
import React from 'react'
import { ApolloProvider } from 'react-apollo'

// Router
import MainRouter from 'router/MainRouter'

// apollo client
import client from 'pchef-shared/src/config/apollo-client'

const App = () => (
  <ApolloProvider client={client}>
    <MainRouter />
  </ApolloProvider>
)

export default App
