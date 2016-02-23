var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var AppSettings = require("application-settings");
var Toast = require("nativescript-toast");
var frameModule = require("ui/frame")
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

var SaitsDetails = new observable.Observable();

var data = everlive.data('Sait');
var visit = everlive.data('Visits');
var query = new Everlive.Query();

SaitsDetails.saitsListArray = new observableArrayModule.ObservableArray([]);

var nameSait = "";
SaitsDetails.DetailView = function(name) {

    SaitsDetails.set("Name", name.Name);
    SaitsDetails.set("Description", name.Descriptions);
    SaitsDetails.set("Picture", name.Picture);
    nameSait = name.Name;
    console.dir(name);
};

SaitsDetails.visits = function() {
    var user = AppSettings.getString(USER_ID);
    var visits = {

        Sait: nameSait,
        User: user

    };

    visit.create(visits,
        function(data) {
            Toast.makeText("You visited this site").show();
        },
        function(error) {
            Toast.makeText("Unfortunately an error occurred: " + error).show();
        });

};

SaitsDetails.camera = function() {

    var topmost = frameModule.topmost();
    topmost.navigate("view/takePhoto/takePhoto");

};

exports.SaitsDetails = SaitsDetails;
