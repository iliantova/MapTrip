var mapsModule = require("nativescript-google-maps-sdk");
var globalMarkers = require("../../common/globalManager");


function OnMapReady(args) {
  var mapView = args.object;

  console.log("Setting a tiny marker...");

  mapView.addMarker(markerVratsa);
  mapView.addMarker(markerShumen);
  mapView.addMarker(markerRilaLakes);
}

function onMarkerSelect(args) {
   console.log("Clicked on " +args.marker.title);
}

exports.OnMapReady = OnMapReady;
exports.onMarkerSelect = onMarkerSelect;