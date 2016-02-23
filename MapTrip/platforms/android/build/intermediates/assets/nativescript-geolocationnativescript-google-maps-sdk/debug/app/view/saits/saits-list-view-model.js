var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
  appId: "49mwdp1w40tbjnlg",
  scheme: "https"
});

var SaitsList = new observable.Observable();

var data = everlive.data('Sait');

var query = new Everlive.Query();
   
SaitsList.saitsListArray = new observableArrayModule.ObservableArray([]);

SaitsList.saitListData = function (name){
	console.log(name + " ----->name");

 query.order('Name').where().eq('Region', name);

 if (SaitsList.saitsListArray.length < 1)
{
data.get(query)
.then(function(data){

for (var i = 0; i < data.result.length; i++){


for (var j = 0; j < ARRAYPICTURE.length; j++) {

  console.log("arr" + ARRAYPICTURE[j].Id);
  console.log("data" + data.result[i].Picture);

  if (data.result[i].Picture == ARRAYPICTURE[j].Id) {

    data.result[i].Picture = "https://api.everlive.com/v1/49mwdp1w40tbjnlg/files/"+ ARRAYPICTURE[j].PictureUrl +"/download";
    SaitsList.saitsListArray.push(data.result[i]);
  }
  
}   
  }
  
 alert(JSON.stringify(data));

  return saitsListArray;
},        
function(error){
  alert(JSON.stringify(error));
});
}

};


    exports.SaitsList = SaitsList;