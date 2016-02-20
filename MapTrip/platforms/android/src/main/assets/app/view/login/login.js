var modelModule = require("./login-view-model");
var model = modelModule.LoginView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;

  model.username = page.getViewById(page,'username');
  model.password = page.getViewById(page,'password');

}

exports.onPageLoaded = onPageLoaded;