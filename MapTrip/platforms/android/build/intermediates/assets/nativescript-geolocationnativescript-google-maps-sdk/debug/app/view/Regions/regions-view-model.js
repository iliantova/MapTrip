var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
  appId: "49mwdp1w40tbjnlg",
  scheme: "https"
});

var LoginView = new observable.Observable();

LoginView.localImagesArray = new observableArrayModule.ObservableArray([]);
LoginView.Array = new Array();

var data = everlive.data('Regions');
var files = everlive.data('Pictures');
var urlPicture;

  files.get().then(function(data) {
       
         for (var i = 0; i < data.result.length; i++) {
           
        ARRAYPICTURE.push(data.result[i]);

         }
  return LoginView.Array;
      },
      function(error) {
        console.log('error');
        console.log(JSON.stringify(error));
      });


data.get()
.then(function(data){
//console.dir(ARRAYPICTURE);
for (var i = 0; i < data.result.length; i++){

for (var j = 0; j < ARRAYPICTURE.length; j++) {

  console.log("arr" + ARRAYPICTURE[j].Id);
  console.log("data" + data.result[i].Picture);

  if (data.result[i].Picture == ARRAYPICTURE[j].Id) {

    data.result[i].Picture = "https://api.everlive.com/v1/49mwdp1w40tbjnlg/files/"+ ARRAYPICTURE[j].PictureUrl +"/download";
    LoginView.localImagesArray.push(data.result[i]);

  }
  
}

}
         

  alert(JSON.stringify(data));

  return localImagesArray;
},
function(error){
  alert(JSON.stringify(error));
});

// LoginView.regionsTap = function (args) {

// var index = args.index;
// console.log(index);

// };

    exports.LoginView = LoginView;