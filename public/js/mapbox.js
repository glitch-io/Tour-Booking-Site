/* eslint-disable*/
export const displayMap = locations => {
  mapboxgl.accessToken =
    'pk.eyJ1Ijoia3VtYXJzYWEiLCJhIjoiY2xtajcwaWFiMDExeDJsbnlsYWRpNHB3eCJ9.1dg2Pknatk45LgNG-WK0qw';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/kumarsaa/clmj9t9th01qn01qxeu5zdj5s',
    scrollZoom: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach(loc => {
    const el = document.createElement('div');
    el.className = 'marker';

    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom'
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({ offset: 30 })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100
    }
  });
};
