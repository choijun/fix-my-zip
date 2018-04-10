import React, { Component } from 'react';
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./issue-markers');

mapboxgl.accessToken  = 'pk.eyJ1IjoibmFuZ2Vsb3MiLCJhIjoiY2plenR5djF6MGluMDJ5bnZ4bGo4MDUzeSJ9.WskwCewN8JIs8j672FujoA';


class Map extends Component {


  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [-87.67852, 41.895397],
      zoom: 12,
      style: 'mapbox://styles/mapbox/light-v9'
    })
    const marker = buildMarker('pothole', [-87.67852, 41.895397])
    marker.addTo(this.map);
  }

  componentWillUnmount(){
    this.map.remove();
  }

  render() {
    return (
      <div
      id="map-component"
      ref={el => this.mapContainer = el}>
      <h2 id="map-header">Map of Issues</h2>
      </div>
    )
  }
}

export default Map;

