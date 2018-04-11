import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssue, fetchIssues, updateIssue } from '../reducers/issues';
import { fetchUser, fetchUsers } from '../reducers/users';

import Map from './map';
import PieChart from './piechart';
import BarGraph from './bargraph';
import TopUserList from './topuserlist';

class Console extends Component {
  constructor(){
    super();
    this.state = {
      status: 'REQUEST',
    }
  }


  componentDidMount(){
    this.props.fetchInitialData();
  }

  render() {
    // console.log(this.props)
    return (
      <div id="main-viewer">
        <div id="console-top-row">
          <Map issues={this.props.issues} />
          <PieChart issues={this.props.issues}/>
        </div>
        <div id="console-bottom-row">
          <BarGraph issues={this.props.issues}/>
          <TopUserList users={this.props.users} />
        </div>
      </div>
    )
  }
}

const mapState = (state) => ({
  issues: state.issues,
  users: state.users
})

const mapDispatch = (dispatch) => {
  return {
    fetchInitialData: () => ({
      fetchIssues: dispatch(fetchIssues()),
      fetchUsers: dispatch(fetchUsers())
    })
  }
}

export default connect(mapState, mapDispatch)(Console);

