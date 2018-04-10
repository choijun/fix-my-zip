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
            <tr>
              <td>janice</td>
              <td>15</td>
              <td>10</td>
              <td>66%</td>
            </tr>
            <tr>
              <td>brad</td>
              <td>5</td>
              <td>2</td>
              <td>40%</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default TopUserList;
