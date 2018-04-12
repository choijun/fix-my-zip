const { Marker } = require('mapbox-gl');

const markerColors = {
  'traffic-light': 'red',
  streetlight: 'yellow',
  pothole: 'blue',
  fixed: 'green'
}

export const buildMarker = (issueObj) => {
  let type = issueObj.issue;
  let coords = [parseFloat(issueObj.longitude.toFixed(5)), parseFloat(issueObj.latitude.toFixed(5))];
  const markerEl = document.createElement('div');
  markerEl.style.backgroundColor = markerColors[type];
  markerEl.style.width = '6px';
  markerEl.style.height = '6px';
  markerEl.style.borderRadius = '50%';
  return new Marker(markerEl).setLngLat(coords);
}


