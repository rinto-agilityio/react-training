import React from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
    name: 'light style',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
    name: 'dark style'
  },
};

export const ThemeContext = React.createContext({
  theme: themes.dark, // default value,
  toggleTheme: () => {},
});
