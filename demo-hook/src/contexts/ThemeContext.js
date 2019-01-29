import React from 'react'

// Theme style
import { themes } from '../theme/globalStyle'

export const SiteThemeContext = React.createContext()

export class SiteThemeProvider extends React.Component {
  state = {
    currentTheme: 'light'
  }

  handleThemeChange = e => {
    const { currentTheme } = this.state

    this.setState({
      currentTheme: currentTheme === 'light' ? 'dark' : 'light'
    })
  }

  render() {
    return (
      <SiteThemeContext.Provider
        value={{
          currentTheme: this.state.currentTheme,
          theme: themes[this.state.currentTheme],
          handleThemeChange: this.handleThemeChange
        }}
      >
        {this.props.children}
      </SiteThemeContext.Provider>
    )
  }
}
