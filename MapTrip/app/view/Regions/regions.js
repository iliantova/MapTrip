var modelModule = require("./regions-view-model");
var model = modelModule.LoginView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;

 }

exports.onPageLoaded = onPageLoaded;