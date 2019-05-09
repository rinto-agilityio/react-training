import React, { Suspense } from 'react'
import { ApolloProvider } from 'react-apollo'
import { Spinner } from 'react-bootstrap'

import AppRoute from './AppRoute'

import client from './apollo'

import './App.css'

const App = () => (
  <div className="App">
    <ApolloProvider client={client}>
      <Suspense
        fallback={() => {
          return (
            <div className='wrap-loading'>
              <Spinner animation="border" variant="primary" />
            </div>
          )
        }}
      >
        <AppRoute />
      </Suspense>
    </ApolloProvider>
  </div>
)

export default App
