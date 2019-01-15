import { createGlobalStyle } from 'styled-components'

export const themes = {
  light: {
    bodyBg: '#fff',
    textColor: '#333',
    navBgColor: '#fff',
    navBorderColor: '#bbb',
  },
  dark: {
    bodyBg: '#444',
    textColor: '#ddd',
    navBgColor: '#111',
    navBorderColor: '#111',
  }
}

export const themeSetting = {
  iconSize: '32px',
}

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.bodyBg};
    color: ${({ theme }) => theme.textColor};
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
