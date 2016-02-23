var observable = require("data/observable");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive("49mwdp1w40tbjnlg");
var frameModule = require("ui/frame")
var RegisterView = new observable.Observable();

RegisterView.username = "";
RegisterView.password = "";

var attrs = {
    Email: 'john.smith1@telerik.com',
    DisplayName: 'John Smith'
};

RegisterView.tapAction = function() {

    everlive.Users.register(RegisterView.username,
        RegisterView.password,
        null,
        function(data) {
            console.log('success');
            console.log(JSON.stringify(data));
        },
        function(error) {
            console.log('error');
            console.log(JSON.stringify(error));
        });
    everlive.authentication.login(RegisterView.username, RegisterView.password, function(data) {
        var accessToken = data.result.access_token;
        console.log(JSON.stringify(data));
        alert("Successfully logged the user in!");

        AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
        AppSettings.setString(USER_ID, data.result.principal_id);

    }, function(err) {
        console.log(JSON.stringify(error));
        //alert("Unfortunately an error occurred: " + err.message);
    });

    var topmost = frameModule.topmost();
    topmost.navigate("view/menu/menu");

};

exports.RegisterView = RegisterView;
