var modelModule = require("./regions-view-model");
var model = modelModule.LoginView;


function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;

 }

 function regionItemTapped(args) {
  var page = args.object.page;
  var model = page.bindingContext;
  var index = args.index;
  var region = model.localImagesArray.getItem(index);
  console.dir(region);
  var options = {
    moduleName: './views/details/details',
    context: region
  };
  frame.topmost()
    .navigate(options);
}

module.exports = {
  regionItemTapped,
  onPageLoaded
};

//exports.onPageLoaded = onPageLoaded;
