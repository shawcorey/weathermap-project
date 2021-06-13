// let map = currentCity();
// This is your token to show the map. mapboxxgl.acessToken was assigned the variable MAPBOX_TOKEN
mapboxgl.accessToken = MAPBOX_TOKEN;

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [-98.4936, 29.4241],
    zoom: 16
});
var geocoder = getGeocoder();
var marker = getMarker([-98.4936, 29.4241]);
addGeocoderEvent();
addMarkerEvent();


function getGeocoder() {
    let geocoder = new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
        marker: false
    });
    map.addControl(geocoder);
    return geocoder;
}

function getMarker(coordinates) {
    return new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
}

function addGeocoderEvent() {
    geocoder.on('result', function (event) {
        marker.setLngLat(event.result.geometry.coordinates)
        fetchForecast(event.result.geometry.coordinates)
    })
}

function addMarkerEvent() {
    map.on('click', function (event) {
        marker.setLngLat(event.lngLat)
        console.log(event.lngLat)
        fetchForecast([event.lngLat.lng, event.lngLat.lat])
    })
}
