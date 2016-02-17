var frameModule = require("ui/frame");
var pagesModule = require("ui/page");

var pageModules = (function() {

  var topmost;
var pageModules = {
        
        pageLoaded: function(args) {
            var page = args.object;
           topmost = frameModule.topmost();
        },
        
        }
         return pageModules;
})();

exports.onPageLoaded = pageModules.pageLoaded;
