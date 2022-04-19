mapboxgl.accessToken = "my token";
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v11", // style URL
  center: [121.597366, 25.105497], // starting position [lng, lat] - taipei
  zoom: 11, // starting zoom
});
