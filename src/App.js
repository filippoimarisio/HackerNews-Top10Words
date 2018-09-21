import React, { Component } from 'react';
import './App.css';
import Top10Words from './containers/Top10Words';
import Instructions from './containers/Instructions';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Instructions} />
          <Route exact path="/top10" component={Top10Words} />
        </div>
      </Router>
    );
  }
}

export default App;
