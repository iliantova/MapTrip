var modelModule = require("./login-view-model");
var model = modelModule.LoginView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;
  
}

exports.onPageLoaded = onPageLoaded;

