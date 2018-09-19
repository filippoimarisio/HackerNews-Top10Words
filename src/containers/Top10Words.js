import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/fetchData';

class Top10Words extends Component {

  refreshData = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        <button className='refreshData' onClick={this.refreshData()}>Refresh data</button>
      </div>
    );
  }
}


export default connect (null,{fetchData})(Top10Words);