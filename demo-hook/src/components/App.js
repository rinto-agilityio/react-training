import React from 'react'
import { ThemeProvider } from 'styled-components'

// Themes
import { GlobalStyle } from '../theme/globalStyle'
import { SiteThemeContext, SiteThemeProvider } from '../contexts/ThemeContext'

// Components
import Header from './Header'
import BookList from './Book/List'
import Loading from './Loading'

const App = () => (
  <SiteThemeProvider>
    <SiteThemeContext.Consumer>
      {({ theme }) => (
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Header />
            <Loading />
            <BookList />
          </React.Fragment>
        </ThemeProvider>
      )}
    </SiteThemeContext.Consumer>
  </SiteThemeProvider>
)

export default App;
