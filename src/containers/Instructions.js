import React, { Component } from 'react';
import {fetchData} from '../actions/fetchData';


class Instructions extends Component {

  refreshData = () => {
    this.props.fetchData()
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Instructions;