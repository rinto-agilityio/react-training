import React, { Suspense } from 'react'
import { ThemeProvider } from 'styled-components'

// Themes
import { GlobalStyle } from '../theme/globalStyle'
import { SiteThemeContext, SiteThemeProvider } from '../contexts/ThemeContext'

// Components
import Loading from './Loading'
import Header from './Header'

const BookList = React.lazy(() => import('./Book/List'))

const App = () => (
  <SiteThemeProvider>
    <SiteThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Header />
            <Suspense fallback={<Loading />}>
              <BookList />
            </Suspense>
          </React.Fragment>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  </SiteThemeProvider>
)

export default App;
