import React, { Component } from 'react';
import Map from './map';
import PieChart from './pie';

class Console extends Component {



  render() {
    return (
      <div>
        <div id="console-top-row">
          <Map />
          <PieChart />
        </div>
        <div id="console-bottom-row">

        </div>
      </div>
    )
  }
}

export default Console;

