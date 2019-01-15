import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Themes
import { GlobalStyle } from '../theme/globalStyle'
import { SiteThemeContext, SiteThemeProvider } from '../contexts/ThemeContext'

// Components
import Loading from './Loading'
import Header from './Header'

const BookList = React.lazy(() => import('./BookList/List'))
const BookDetail = React.lazy(() => import('./BookDetail'))

// Split router
const AppRouter = () => (
  <Switch>
    <Route path="/" exact component={BookList} />
    <Route path="/book/:id" component={BookDetail} />
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
              <Suspense fallback={<Loading />}>
                <AppRouter />
              </Suspense>
            </React.Fragment>
          </Router>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  </SiteThemeProvider>
)

export default App;
