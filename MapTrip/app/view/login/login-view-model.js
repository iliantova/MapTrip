var observable = require("data/observable");
var Everlive = require('~/everlive.all.min');
var AppSettings = require("application-settings");
var Toast = require("nativescript-toast");


var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

console.log(everlive.authentication);

var frameModule = require("ui/frame")

var LoginView = new observable.Observable();

LoginView.username = "";
LoginView.password = "";


var attrs = {
    Email: 'john.smith1@telerik.com',
    DisplayName: 'John Smith'
};

LoginView.loginButton = function() {

    console.log("befor");

    var topmost = frameModule.topmost();
    console.log("Miid");


    var username = LoginView.get("username");;
    var password = LoginView.get("password");;
    if (username == "" || password == "" || username == null || password == null) {

        Toast.makeText("Plaese, enter user name and password").show();

    }

    everlive.authentication.login(username, password, function(data) {
        var accessToken = data.result.access_token;
        console.log(JSON.stringify(data));
        Toast.makeText("Successfully logged the user in!" + username).show();
        AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
        AppSettings.setString(USER_ID, data.result.principal_id);
        topmost.navigate("view/menu/menu");

    }, function(err) {
        console.log(JSON.stringify(error));
        alert("Unfortunately an error occurred: " + err.message);
    });
};

LoginView.register = function() {

    var topmost = frameModule.topmost();
    topmost.navigate("view/register/register");
};

exports.LoginView = LoginView;
