import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

// Themes
import { GlobalStyle } from '../theme/globalStyle'
import { SiteThemeContext, SiteThemeProvider } from '../contexts/ThemeContext'

// Components
import Loading from './Loading'
import Header from './Header'

const BookList = React.lazy(() => import('./BookList'))
const BookDetail = React.lazy(() => import('./BookDetail'))
const Author = React.lazy(() => import('./Author'))

// Similar to container
const AppWrapper = styled.div`
  padding: 1rem;
`

// Split router
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={props => <BookList {...props}/>} />
    <Route path="/book/:id" component={props => <BookDetail {...props} />} />
    <Route path="/author/:id" component={props => <Author {...props} />} />
  </Switch>
)

const App = () => (
  <SiteThemeProvider>
    <SiteThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <Router>
            <React.Fragment>
              <GlobalStyle />
              <Header />
              <AppWrapper>
                <Suspense fallback={<Loading />}>
                  <AppRouter />
                </Suspense>
              </AppWrapper>
            </React.Fragment>
          </Router>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  </SiteThemeProvider>
)

export default App;
