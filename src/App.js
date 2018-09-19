import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Top10Words from './containers/Top10Words'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Top10Words />
      </div>
    );
  }
}

export default App;
