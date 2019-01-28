import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import client from './apollo'

// Theme
import { GlobalStyle } from './theme/globalStyle'

// Components
import Header from './components/Header'


// Screen
const Homepage = React.lazy(() => import('./router/Homepage'))
const SinglePost = React.lazy(() => import('./router/SinglePost'))

// Router config
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={props => <Homepage {...props}/>} />
    <Route path="/post/:slug" component={props => <SinglePost {...props} />} />
  </Switch>
)

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
