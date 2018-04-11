import React, { Component } from 'react';



class TopUserList extends Component {




  render(){
    return (
      <div>
        <h2 className="component-header">Most Active Users</h2>
        <table id="top-user-table">
        <thead>
            <tr>
              <th>Username</th>
              <th>Issues Reported</th>
              <th>Issues Completed</th>
              <th>Percent Completed</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.users.map(user => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.issues.length}</td>
              <td>{user.issues.filter(issue => {return issue.fixed === true}).length}</td>
              <td>{
                (isNaN((user.issues.filter(issue => {return issue.fixed === true}).length / user.issues.length * 100).toFixed(0))) ? '0%' : (user.issues.filter(issue => {return issue.fixed === true}).length / user.issues.length * 100).toFixed(0) + '%'
                }</td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TopUserList;
