var modelModule = require("./register-view-model");
var model = modelModule.RegisterView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;

  model.username = page.getViewById(page,'username');
  model.password = page.getViewById(page,'password');

}

exports.onPageLoaded = onPageLoaded;