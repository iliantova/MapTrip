var application = require("application");
application.mainModule = "view/login/login";
global.TOKEN_DATA_KEY = "authenticationToken";
global.USER_ID = "userId";
application.cssFile = "./app.css";
application.start();