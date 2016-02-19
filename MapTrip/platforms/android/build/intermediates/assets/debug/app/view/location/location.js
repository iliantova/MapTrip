var geolocation = require("nativescript-geolocation");
function buttonGetLocationTap(args) {
    var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 20000}).
    then(function(loc) {
        if (loc) {
            console.log("Current location is: " + loc.android);
        }
    }, function(e){
        console.log("Error: " + e.message);
    });
}
exports.buttonGetLocationTap = buttonGetLocationTap;

