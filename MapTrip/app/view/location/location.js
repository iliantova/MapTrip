var geolocation = require("nativescript-geolocation");
var mapsModule = require("nativescript-google-maps-sdk");
var nativescriptDom = require( "nativescript-dom" );

var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

var closest = -1
var markersAll = [];

function loaded() {

var data = everlive.data('Sait');
    data.get().then(function(data){
             for(var i = 0; data.result.length; i++) {

               markersAll.push(data.result[i]);

               console.log("ADDED OBJECT TO ARRAY " + markersAll[i].Name); 
               console.log("ADDED OBJECT TO ARRAY " + markersAll[i].Location.longitude);
               console.log(markersAll.length);
               console.log("END");
               console.log("In for cicle ---> " + markersAll.length);
              }
           },
         function(error){
         console.log("Error");
        });
}


function buttonGetLocationTap(args) {

    var button = getElementById("closestLocation");

    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).  
    then(function(loc) {
        if (loc) {

        var lat1 = loc.latitude;
        var lon1 = loc.longitude;

        var pi = Math.PI;
        var R = 6371;
        var distances = [];
    
    for( i = 0; i < markersAll.length - 1; i++ ) {  
 
        var lat2 = markersAll[i].Location.latitude;
        var lon2 = markersAll[i].Location.longitude; 
 
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

    button.on('swipe', function (args) {

    var label = getElementById("infoLabel");
    label.text = markersAll[closest].InterestingInformation;
    });

    button.text = markersAll[closest].Name;
        }
    }, function(e){
        console.log("Error: " + e.message);
        button.text = "No location at the moment";
    });
}

function getInfo(args) {
    console.log("Inside button with closest location");
}

exports.buttonGetLocationTap = buttonGetLocationTap;
exports.getInfo = getInfo;
exports.loaded = loaded;