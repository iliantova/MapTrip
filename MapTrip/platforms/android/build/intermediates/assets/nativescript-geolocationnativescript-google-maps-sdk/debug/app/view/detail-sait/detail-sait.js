var modelModule = require("./detail-sait-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var model = modelModule.SaitsDetails;

function pageNavigatedTo(args) {
    console.log('tuka sum');
    var page = args.object;
    var sait = args.context;
    page.bindingContext = model;
    model.DetailView(sait);
}

exports.pageNavigatedTo = pageNavigatedTo;
