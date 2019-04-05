import React from 'react';

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

export const { Provider, Consumer } = React.createContext({
  theme: themes.dark, // default value,
  toggleTheme: () => {},
});

export function ContextWrapper(WrappedComponent) {
  return function Wrapper(props) {
      return(
        <Consumer>
          { value => (
            <WrappedComponent {...props} {...value} />
          )}
        </Consumer>
      )
    }
}
