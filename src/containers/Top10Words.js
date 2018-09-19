import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/fetchData';
import Dropdown from '../components/Dropdown'
import {showTop10Words} from '../actions/showTop10Words'

class Top10Words extends Component {

  refreshData = () => {
    // this.props.fetchData()
    console.log('data')
  }

  showTop10 = option => {
    console.log(option)
    this.props.showTop10Words(option)
  }

  render() {

    const title = this.props.title

    return (
      <div>
        <button className='refreshData' onClick={this.refreshData()}>Refresh data</button>
        <div>
          <Dropdown showTop10={this.showTop10}/>
        </div>
      </div>
    );
  }
}


export default connect (null,{fetchData, showTop10Words})(Top10Words);