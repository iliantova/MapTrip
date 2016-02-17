var frameModule = require("ui/frame");
var pagesModule = require("ui/page");

var pageModules = (function() {

  var topmost;
var pageModules = {
        
        pageLoaded: function(args) {
            var page = args.object;
           topmost = frameModule.topmost();
        },

        navWithPageName: function() {
            var topmost = frameModule.topmost();
    topmost.navigate("view/register/register");
        }

        }

         return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.navWithPageName = pageModules.navWithPageName;