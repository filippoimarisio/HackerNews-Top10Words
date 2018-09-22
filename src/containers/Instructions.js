import React, { Component } from 'react';
import { fetchData } from '../actions/fetchData';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Instructions extends Component {

  refreshData = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
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
          <button className='start' onClick={this.refreshData}>Start</button>
        </Link>
      </div>
    );
  }
}

export default connect(null, {fetchData}) (Instructions);