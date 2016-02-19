var frameModule = require("ui/frame");
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var buttonModule = require("ui/button");
var button = new buttonModule.Button();

var pageModules = (function() {

  var topmost;
var pageModules = {
        
        pageLoaded: function(args) {
            var page = args.object;
             var usernameTextField = view.getViewById(page, "username");
    var passwordTextField = view.getViewById(page, "password");
    var confirmTextField = view.getViewById(page, "confirmpassword");
    var signUpButton = view.getViewById(page, "signUpButton");
    signUpButton.backgroundImage = "~/view/register/gradient_button.png";
           topmost = frameModule.topmost();

          // if(passwordTextField.text === confirmTextField.text || usernameTextField.text === "" || passwordTextField.text === "")
       },
            
        }
         return pageModules;
})();

exports.onPageLoaded = pageModules.pageLoaded;
