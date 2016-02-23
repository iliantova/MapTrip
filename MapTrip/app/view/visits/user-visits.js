var modelModule = require("./user-visits-view-model");
var model = modelModule.VisitsList;


function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;
