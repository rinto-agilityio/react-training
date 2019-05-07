import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Spinner } from 'react-bootstrap'

import AppRoute from './AppRoute'
// client
// $FlowFixMe
import client from './apollo/index'
const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <Suspense fallback={()=> <Spinner animation="border" variant="primary" />}>
        <AppRoute />
      </Suspense>
    </ApolloProvider>
  </div>
)

export default App
