import React from 'react'

import { ThemeContext } from '../contexts/ThemeContext';

class ThemedButton extends React.Component {
  render() {
    // let props = this.props;
    let context = this.context;

    return (
      <ThemeContext.Consumer>
        {(context) => (
          <button
            onClick={context.toggleTheme}
            style={{
              backgroundColor: context.theme.background,
              width: '100px',
              height: '40px',
              color: context.theme.foreground
            }}
          >
            Toggle Theme
          </button>
        )}
      </ThemeContext.Consumer>
    );
  }
}

//assigned class to context
ThemedButton.contextType = ThemeContext;

export default ThemedButton;
