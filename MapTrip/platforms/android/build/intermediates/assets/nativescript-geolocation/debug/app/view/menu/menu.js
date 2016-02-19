var frameModule = require("ui/frame");

exports.login = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/login/login");
};

exports.location = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("/view/location/location");
};
