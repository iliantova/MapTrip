var application = require("application");
//application.mainModule = "view/Regions/regions";
application.mainModule = "view/login/login";
global.TOKEN_DATA_KEY = "";
global.USER_ID = "";
global.ARRAYPICTURE = new Array();
application.cssFile = "./app.css";
application.start();