import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIssue, fetchIssues, updateIssue } from '../reducers/issues';
import { fetchUser, fetchUsers } from '../reducers/users';

import Map from './map';
import PieChart from './piechart';
import BarGraph from './bargraph';
import TopList from './topusers';

class Console extends Component {


  componentDidMount(){
    this.props.fetchInitialData();
  }

  render() {
    return (
      <div>
        <div id="console-top-row">
          <Map />
          <PieChart />
        </div>
        <div id="console-bottom-row">
          <BarGraph />
          <TopList />
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

