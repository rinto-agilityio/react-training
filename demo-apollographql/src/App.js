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
const Post = React.lazy(() => import('./router/Post'))
const Author = React.lazy(() => import('./router/Author'))

// Router config
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={props => <Homepage {...props}/>} />
    <Route path="/post/:slug" component={props => <Post {...props} />} />
    <Route path="/author/:id" component={props => <Author {...props} />} />
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
