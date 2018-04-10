import React, { Component } from 'react';
import Map from './map';
import PieChart from './piechart';
import BarGraph from './bargraph';
import TopList from './topusers';

class Console extends Component {



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

export default Console;

