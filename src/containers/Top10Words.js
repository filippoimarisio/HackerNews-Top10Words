import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchData} from '../actions/fetchData';
import {resetState} from '../actions/resetState';
import Dropdown from '../components/Dropdown';
import {last25Top10, lastWeekTop10, goodKarmaTop10} from '../logic/functions';
import {Top10List} from '../components/Top10List';
import {showList} from '../actions/showList';
import {
  CircularProgress,
  Typography,
} from '@material-ui/core';

class Top10Words extends Component {

  refreshData = () => {
    this.props.resetState()
    this.props.fetchData()
  }

  showTop10 = option => {
    if(option === 'last25') {
      const last25Top = last25Top10(this.props.newStoriesList)
      this.props.showList(last25Top)
    }
    if(option === 'lastWeek') {
      const lastWeekTop = lastWeekTop10(this.props.newStoriesList)
      this.props.showList(lastWeekTop)
    }
    if(option === 'goodKarma') {
      this.props.showList('goodKarma')
    }
  } 

  render() {

    if(this.props.newStoriesList.length < 500) {
      return (
        <div className='noLocation'>
          <CircularProgress />{' '}
          <Typography>Fetching last HackerNews stories...</Typography>
        </div>
      )
    }

    const {top10List} = this.props

    return (
      <div>
        <button className='refreshData' onClick={this.refreshData}>Refresh data</button>
        <div>
          <Dropdown showTop10={this.showTop10}/>
        </div>
        <div>
          <Top10List top10List={top10List}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newStoriesList: state.newStoriesList, 
    top10List: state.top10List
  }
}


export default connect (mapStateToProps,{fetchData, resetState, showList})(Top10Words);