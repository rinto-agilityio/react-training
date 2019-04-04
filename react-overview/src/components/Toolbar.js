//import lib
import React from 'react';
import {ThemeContext, themes} from '../contexts/ThemeContext';

//import components
import ThemedButton from './ThemedButton'

class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme
    };

  }
  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark
    }));
  };

  render () {
    // A component in the middle doesn't have to
    // pass the theme down explicitly anymore.
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <ThemedButton />
        </ThemeContext.Provider>
      </div>
    );
  }

}

export default Toolbar
