var modelModule = require("./register-view-model");
var model = modelModule.RegisterView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
}

exports.onPageLoaded = onPageLoaded;