var application = require("application");
application.mainModule = "view/Regions/regions";
global.TOKEN_DATA_KEY = "authenticationToken";
global.USER_ID = "userId";
global.ARRAYPICTURE = new Array();
application.cssFile = "./app.css";
application.start();