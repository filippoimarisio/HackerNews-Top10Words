import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Instructions extends Component {

  render() {
    return (
      <div className='instructionsPage'>
        <h1>
          Welcome to HN top10 words
        </h1>
        <p>
          This app allows you discover the most used terms in the HackerNews stories collection. 
          Just select the filter you'd like to apply from the dropdown menu and you'll see the top 10 most used words in the titles relative to that specific filter selection.
        </p>
        <h3>
          Click this button to start
        </h3>
        <Link to={`/top10`}>
          <button className='btn'>Start</button>
        </Link>
      </div>
    );
  }
}

export default Instructions;