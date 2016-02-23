var observable = require("data/observable");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive("49mwdp1w40tbjnlg");
var frameModule = require("ui/frame")
var Toast = require("nativescript-toast");
var RegisterView = new observable.Observable();
var AppSettings = require("application-settings");

RegisterView.tapAction = function () {

    var topmost = frameModule.topmost();
    var username = RegisterView.get("username");
    var password = RegisterView.get("password");
    var comfirmpassword = RegisterView.get("confirmpassword");

    if (username == "" || password == "" || username == null || password == null) {

      Toast.makeText("Plaese, enter user name and password").show();
  } else

  if (password != comfirmpassword ) {

    Toast.makeText("Plaese, enter same value for password and confirm password").show();
}
else {
    everlive.Users.register(username,
        password,
        null,
        function(data) {

         everlive.authentication.login(username, password, function(data) {
             var accessToken = data.result.access_token;

             Toast.makeText("Successfully logged the user in!").show();

             AppSettings.setString(TOKEN_DATA_KEY, data.result.access_token);
             AppSettings.setString(USER_ID, data.result.principal_id);
             var user = AppSettings.getString(USER_ID);
             console.log("????" + user)

         }, function(err) {
            console.log(JSON.stringify(error));
            Toast.makeText("Unfortunately an error occurred: " + err.message).show();
        });
         var topmost = frameModule.topmost();
         topmost.navigate("view/menu/menu");
     },
     function(error) {
        Toast.makeText("Unfortunately an error occurred: " + error).show();
    });

}


};

exports.RegisterView = RegisterView;