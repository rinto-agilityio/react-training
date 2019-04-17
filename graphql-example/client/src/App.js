import React, { Component } from 'react';
import './App.css';
// import ExchangeRates from './components/ExchangeRates'
import Dogs from './components/Dogs'
import DogPhoto from './components/DogPhoto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Dogs />
        <DogPhoto />
      </div>
    );
  }
}

export default App;
