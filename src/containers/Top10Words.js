import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/fetchData';
import {resetState} from '../actions/resetState';
import Dropdown from '../components/Dropdown'

class Top10Words extends Component {

  refreshData = () => {
    this.props.resetState()
    this.props.fetchData()
  }

  showTop10 = option => {
    console.log(option)
    return option
  } 

  render() {
    const newStoriesList = this.props.newStoriesList
    if (newStoriesList.length < 500) return 'Loading...'
    console.log(newStoriesList)

    return (
      <div>
        <button className='refreshData' onClick={this.refreshData}>Refresh data</button>
        <div>
          <Dropdown onChange={this.showTop10}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({newStoriesList}) => {
  return {newStoriesList}
}


export default connect (mapStateToProps,{fetchData, resetState})(Top10Words);