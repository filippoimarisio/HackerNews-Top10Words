import React, { Component } from 'react';
import '../App.css';

class Dropdown extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      value : 'last25'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.showTop10(this.state.value);
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select className='dropbtn' value={this.state.value} onChange={this.handleChange}>  
              <option value='last25'>Top 10 most occurring words in the titles of the last 25 stories</option>
              <option value='lastWeek'>Top 10 most occurring words in the titles of the post of exactly the last week</option>
              <option value='goodKarma'>Top 10 most occurring words in titles of the last 600 stories of users with at least 10.000 karma</option>
            </select>
            <input type="submit" value="Submit" className='btnSubmit'/>
          </label>
        </form>
      </div>
    );
  }
}

export default Dropdown
