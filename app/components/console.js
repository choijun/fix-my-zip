import React, { Component } from 'react';
import Map from './map';

class Console extends Component {



  render() {
    return (
      <div>
        <div id="console-top-row">
          <Map />

        </div>
        <div id="console-bottom-row">

        </div>
      </div>
    )
  }
}

export default Console;

