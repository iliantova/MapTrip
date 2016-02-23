var modelModule = require("./regions-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var model = modelModule.LoginView;


function onPageLoaded(args) {
    var page = args.object;
    page.bindingContext = model;

    view.getViewById(page, 'saitList').on("itemTap", function(args) {
        var page = args.object.page;
        var model = page.bindingContext;
        var index = args.index;
        var region = model.localImagesArray.getItem(index);
        var options = {
            moduleName: './view/saits/saits-list',
            context: region
        };
        frame.topmost()
            .navigate(options);
    });
}

exports.onPageLoaded = onPageLoaded;
