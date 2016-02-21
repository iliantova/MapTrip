var geolocation = require("nativescript-geolocation");
var mapsModule = require("nativescript-google-maps-sdk");
var globalMarkers = require("../../common/globalManager");
var nativescriptDom = require( "nativescript-dom" );

var closest = -1

function buttonGetLocationTap(args) {
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {

        var lat1 = loc.longitude;
        var lon1 = loc.latitude;

        var pi = Math.PI;
        var R = 6371;
        var distances = [];


    for( i=0;i<markers.length; i++ ) {  
 
        var lat2 = markers[i].latitude;
        var lon2 = markers[i].longitude; 

        var chLat = lat2-lat1;
        var chLon = lon2-lon1;

        var dLat = chLat*(pi/180);
        var dLon = chLon*(pi/180);
        var rLat1 = lat1*(pi/180);
        var rLat2 = lat2*(pi/180);

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) + 
                    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(rLat1) * Math.cos(rLat2); 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c;

        distances[i] = d;
        if ( closest == -1 || d < distances[closest] ) {
            closest = i;
        }
    }

    var button = getElementById("Hi");
    button.text = markers[closest].title;
        }
    }, function(e){
        console.log("Error: " + e.message);
    });
}

function getInfo(args) {
	console.log("Inside button with closest location");
	var label = getElementById("infoLabel");

	console.log(markers[closest].title);

	if(markers[closest].title == "Шумен") {
		label.text = "Шумен град";
	} else if(markers[closest].title == "Враца") {
		label.text = "Враца град";
	}else if(markers[closest].title == "Рила") {
		label.text = "Рила планина";
	}
}
exports.buttonGetLocationTap = buttonGetLocationTap;
exports.getInfo = getInfo;