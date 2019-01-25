import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { withClientState } from 'apollo-link-state';

// Theme
import { GlobalStyle } from './theme/globalStyle'

// Components
import Header from './components/Header'

// ApolloGraphQL Config
const defaults = {
  app: {
    __typename: 'ApolloDemo',
    currentPageName: 'Apollo Demo'
  }
}

const cache = new InMemoryCache();
const stateLink = withClientState({
  cache,
  defaults,
})


const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache,
  link: ApolloLink.from([
    stateLink
  ])
})

// Screen
const PageInfo = React.lazy(() => import('./router/PageInfo'))
const Homepage = React.lazy(() => import('./router/Homepage'))
const SinglePost = React.lazy(() => import('./router/SinglePost'))

// Router config
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={props => <Homepage {...props}/>} />
    <Route path="/post/:slug" component={props => <SinglePost {...props} />} />
    {/* <Route path="/author/:id" component={props => <Author {...props} />} /> */}
  </Switch>
)

const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Suspense fallback={<div>...</div>}>
        <>
          <GlobalStyle />
          <Header />
          <PageInfo />
          <AppRouter />
        </>
      </Suspense>
    </Router>
  </ApolloProvider>
)

export default App
