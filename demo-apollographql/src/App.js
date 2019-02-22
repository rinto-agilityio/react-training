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
import Loading from './components/Loading'

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<Loading />}>
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
