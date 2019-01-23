import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

// Theme
import { GlobalStyle } from './theme/globalStyle'

// Components
import Header from './components/Header'

// ApolloGraphQL Config
const client = new ApolloClient({
  uri: "http://localhost:4000/",
})

// Screen
const Homepage = React.lazy(() => import('./router/Homepage'))

// Router config
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={props => <Homepage {...props}/>} />
    {/* <Route path="/book/:id" component={props => <BookDetail {...props} />} />
    <Route path="/author/:id" component={props => <Author {...props} />} /> */}
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
