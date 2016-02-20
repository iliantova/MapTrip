//var frameModule = require("ui/frame");
//var pagesModule = require("ui/page");
//var view = require("ui/core/view");
var modelModule = require("./register-view-model");
var model = modelModule.RegisterView;

//var pageModules = (function() {

  //var topmost;

function onPageLoaded(args) {
  var page = args.object;
  page.bindingContext = model;

  model.username = page.getViewById(page,'username');
  model.password = page.getViewById(page,'password');

}

//var pageModules = {
        
      //  pageLoaded: function(args) {
          //  var page = args.object;
          //  page.bindingContext = model;
            // var usernameTextField = view.getViewById(page, "username");
    //var passwordTextField = view.getViewById(page, "password");
    //var confirmTextField = view.getViewById(page, "confirmpassword");
   // var signUpButton = view.getViewById(page, "signUpButton");
   // signUpButton.backgroundImage = "~/view/register/gradient_button.png";
          // topmost = frameModule.topmost();

          // if(passwordTextField.text === confirmTextField.text || usernameTextField.text === "" || passwordTextField.text === "")
     //  },
            
     //   }
      //   return pageModules;
//})();

exports.onPageLoaded = onPageLoaded;