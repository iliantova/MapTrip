var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

var LoginView = new observable.Observable();

LoginView.localImagesArray = new observableArrayModule.ObservableArray([]);


var data = everlive.data('Regions');
data.get()
    .then(function(data){

  for (var i = 0; i < data.result.length; i++) {
            var newItem = data.result[i];
           newItem.Picture = 'https://platform.telerik.com/bs/app/#/49mwdp1w40tbjnlg/data/types/7320f860-d64b-11e5-bd70-2f49940d1c4f/'+data.result[i].Picture;
          LoginView.localImagesArray.push(newItem);
           console.log(JSON.stringify(newItem));
           console.log(LoginView.localImagesArray);

        }

 LoginView.set("username", data.result[0].Name);

        alert(JSON.stringify(data));
        console.log(data.result[0].Name);

    return localImagesArray;
},
    function(error){
        alert(JSON.stringify(error));
    });

    //console.log(LoginView.localImagesArray[0].Name);


exports.LoginView = LoginView;