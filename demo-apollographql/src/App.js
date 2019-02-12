import React, { Suspense } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

// Routers
import AppRouter from './routers'

// Theme
import { GlobalStyle } from './theme/globalStyle'

// Components
import Header from './components/Header'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<div>...</div>}>
        <>
          <GlobalStyle />
          <Header />
          <AppRouter />
        </>
      </Suspense>
    </Router>
  </ApolloProvider>
)

export default App
