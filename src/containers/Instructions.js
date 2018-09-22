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