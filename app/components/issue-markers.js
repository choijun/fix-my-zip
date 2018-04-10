const { Marker } = require('mapbox-gl');

const markerColors = {
  trafficLight: 'red',
  streetlight: 'yellow',
  pothole: 'blue',
  fixed: 'green'
}

const buildMarker = (type, coords) => {
  const markerEl = document.createElement('div');
  markerEl.style.backgroundColor = markerColors[type];
  markerEl.style.width = '6px';
  markerEl.style.height = '6px';
  markerEl.style.borderRadius = '50%';
  return new Marker(markerEl).setLngLat(coords);
}

module.exports = buildMarker;

