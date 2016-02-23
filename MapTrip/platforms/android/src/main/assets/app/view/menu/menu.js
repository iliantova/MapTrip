var frameModule = require("ui/frame");

exports.map = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/map/map");
};


exports.regions = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/Regions/regions");
};

exports.location = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/location/location");
};

exports.visited = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/visits/user-visits");
};

