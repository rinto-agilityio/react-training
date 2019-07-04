// Libs
import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'

// components
import Loading from 'pchef-shared/src/components/Loading'

// Router
import MainRouter from 'router/MainRouter'

// apollo client
import client from 'pchef-shared/src/config/apollo-client'

const App = () => (
  <ApolloProvider client={client}>
    <Suspense fallback={<Loading />}>
      <MainRouter />
    </Suspense>
  </ApolloProvider>
)

export default App
