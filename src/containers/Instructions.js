import React, { Component } from 'react';
import { fetchData } from '../actions/fetchData';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {last25Top10} from '../logic/functions'

const stories = [
  {
  title: 'Ciao belli, aooo',
  time: 1223124
  }, {
  title: 'Forza lotta! vincerai? non ti lasceremo mai',
  time: 42342
  }, {
    title: 'Forza Milan ale',
    time: 42341
  }, {
    title: 'Forza magico milan',
    time: 421
  }, {
    title: 'siamo qui che non cantiamo con il mai milan ale ale',
    time: 423432111
  }
]

last25Top10(stories)


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