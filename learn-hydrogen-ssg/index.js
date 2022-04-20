const page = ({ title, data, head }) => `
<html>
  <head>
    <title>${title}</title>
    ${head}
    <meta name="viewport" content="initial-scale=1,maximum-scale=1,user-scalable=no">
    <link href="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.css" rel="stylesheet">
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.8.1/mapbox-gl.js"></script>
    <style>
        body { margin: 0; padding: 0; }
        #map { position: absolute; top: 0; bottom: 0; width: 100%; }
    </style>
  </head>
  <body>
    <div id="map"></div>
    <script>
    mapboxgl.accessToken = "${data.MapBoxKey}";
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [121.5484, 22.0436], // starting position [lng, lat]
        zoom: 12 // starting zoom
    });
    </script>
  <body>
</html>
`;

module.exports = {
  page,
  title: "Welcome to Hydrogen",
  data: () => ({
    project: "Hydrogen",
    description: "Super fast static-site generator!!",
    MapBoxKey:
      "pk.eyJ1IjoiYm9qbmUiLCJhIjoiY2wyN3J1aWk4MDJhbzNlbDNleWJxdWQzbCJ9.DDPlH3SjftRuRlEWRCdlvA",
  }),
  head: ({ data }) => [
    ["meta", { name: "description", content: data.description }],
  ],
};
