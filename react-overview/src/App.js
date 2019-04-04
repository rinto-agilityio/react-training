import React, { Component } from 'react';
import './App.css';

//import components
import Toolbar from './components/Toolbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
      </div>
    );
  }
}

export default App;
