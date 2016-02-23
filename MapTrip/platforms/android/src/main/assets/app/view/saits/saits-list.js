var modelModule = require("./saits-list-view-model");
var view = require("ui/core/view");
var frame = require("ui/frame");
var model = modelModule.SaitsList;


function pageNavigatedTo(args) {
    var page = args.object;
    var sait = args.context;
    page.bindingContext = model;
    model.saitListData(sait.Name);

    view.getViewById(page, 'saitDetailsList').on("itemTap", function(args) {
        var page = args.object.page;
        var model = page.bindingContext;
        var index = args.index;
        var sait = model.saitsListArray.getItem(index);
        var options = {
            moduleName: './view/detail-sait/detail-sait',
            context: sait
        };
        frame.topmost()
            .navigate(options);
    });
}

exports.pageNavigatedTo = pageNavigatedTo;
