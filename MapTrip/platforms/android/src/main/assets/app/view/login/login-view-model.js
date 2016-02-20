var observable = require("data/observable");
var Everlive = require('~/everlive.all.min');
//var everlive = new Everlive("49mwdp1w40tbjnlg");

var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

console.log(everlive.authentication);

var frameModule = require("ui/frame")

var LoginView = new observable.Observable();

LoginView.username="";
LoginView.password="";


var attrs = {
    Email: 'john.smith1@telerik.com',
    DisplayName: 'John Smith'
};

LoginView.loginButton = function () {

console.log("befor");

var topmost = frameModule.topmost();
console.log("Miid");
 topmost.navigate("view/menu/menu");

 console.log("after");
  
      var username = LoginView.username;
      var password = LoginView.password;
console.log(username);
      console.log(password);
console.log(everlive.authentication);
everlive.authentication.login(username, password, function(data) {
        var accessToken = data.result.access_token;
        console.log(JSON.stringify(data));
        //alert("Successfully logged the user in!");
       
    }, function(err) {
        console.log(JSON.stringify(error));
        //alert("Unfortunately an error occurred: " + err.message);
    });


};

LoginView.register = function () {

var topmost = frameModule.topmost();
      topmost.navigate("view/register/register");
};

exports.LoginView = LoginView;