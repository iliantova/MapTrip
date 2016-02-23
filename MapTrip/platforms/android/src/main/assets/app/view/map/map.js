var mapsModule = require("nativescript-google-maps-sdk");

var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

function OnMapReady(args) {
    var mapView = args.object;

    console.log("Setting a tiny marker...");

    var data = everlive.data('Sait');
    data.get()
        .then(function(data) {

                for (var i = 0; data.result.length; i++) {
                    var latitude = data.result[i].Location.latitude;
                    var longitute = data.result[i].Location.longitude;

                    var marker = new mapsModule.Marker();
                    marker.title = data.result[i].Name;
                    marker.snippet = data.result[i].Descriptions;
                    marker.position = mapsModule.Position.positionFromLatLng(latitude, longitute);
                    mapView.addMarker(marker);
                }
            },
            function(error) {
                console.log("Error");
            });
}

function onMarkerSelect(args) {
    console.log("Clicked on " + args.marker.title);
}

exports.OnMapReady = OnMapReady;
exports.onMarkerSelect = onMarkerSelect;
