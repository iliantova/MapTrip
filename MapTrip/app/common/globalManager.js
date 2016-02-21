var mapsModule = require("nativescript-google-maps-sdk");

var markersModule = (function(){

	markerVratsa = new mapsModule.Marker();
	markerVratsa.position = mapsModule.Position.positionFromLatLng(43.20710, 23.55314);
	markerVratsa.longitude = 43.20710;
	markerVratsa.latitude = 23.55314;
	markerVratsa.title = "Враца";
	markerVratsa.snippet = "Пещера Леденика";
	markerVratsa.userData = { index : 1};

	markerShumen = new mapsModule.Marker();
	markerShumen.position = mapsModule.Position.positionFromLatLng(43.26820, 26.93043);
	markerShumen.longitude = 43.26820;
	markerShumen.latitude = 26.93043;
	markerShumen.title = "Шумен";
	markerShumen.snippet = 'Паметник "Създатели на българската държава"';
	markerShumen.userData = { index : 1};

	markerRilaLakes = new mapsModule.Marker();
	markerRilaLakes.position = mapsModule.Position.positionFromLatLng(42.1493474, 23.59174);
	markerRilaLakes.longitude = 42.1493474;
	markerRilaLakes.latitude = 23.59174;
	markerRilaLakes.title = "Рила";
	markerRilaLakes.snippet = 'Седемте рилски езера';
	markerRilaLakes.userData = { index : 1};

	markers = [markerVratsa, markerShumen];
	return markers;
}());

exports.markersModule = markersModule;