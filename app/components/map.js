import React, { Component } from 'react';
const mapboxgl = require('mapbox-gl');
const buildMarker = require('./issue-markers');
import { connect } from 'react-redux';

mapboxgl.accessToken  = 'pk.eyJ1IjoibmFuZ2Vsb3MiLCJhIjoiY2plenR5djF6MGluMDJ5bnZ4bGo4MDUzeSJ9.WskwCewN8JIs8j672FujoA';


class Map extends Component {


  componentDidMount(){
    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      center: [-87.67852, 41.895397],
      zoom: 12,
      style: 'mapbox://styles/mapbox/light-v9'
    })
    console.log('didMount props>>>>>>', this.props)
    this.props.issues.forEach(issue => {
      const marker = buildMarker(issue);
      marker.addTo(this.map);
    })
    const marker = buildMarker({type: 'pothole', longitude: -87.67852, latitude: 41.895397})
    marker.addTo(this.map);
  }

  componentWillUnmount(){
    this.map.remove();
  }

  render() {

    return (
      <div>
        <h2 className="component-header">Map of Issues</h2>
        <div
        id="map-component"
        ref={el => this.mapContainer = el}/>
      </div>
    )
  }
}

const mapState = (state) => ({
    issues: state.issues,
    users: state.users
})

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Map);

