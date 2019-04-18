import React, { Component } from 'react';
import './App.css';
// import ExchangeRates from './components/ExchangeRates'
// import Dogs from './components/Dogs'
// import DogPhoto from './components/DogPhoto'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <Todos />
      </div>
    );
  }
}

export default App;
