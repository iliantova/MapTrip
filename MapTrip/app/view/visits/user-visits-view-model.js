var observable = require("data/observable");
var observableArrayModule = require("data/observable-array");
var AppSettings = require("application-settings");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive({
    appId: "49mwdp1w40tbjnlg",
    scheme: "https"
});

var VisitsList = new observable.Observable();

VisitsList.visitsArray = new observableArrayModule.ObservableArray([]);

var data = everlive.data('Visits');
var user = AppSettings.getString(USER_ID);

var query = new Everlive.Query()
query.order('CreatedAt').where().eq('User', user);

data.get(query)
    .then(function(data) {

            console.log(data.result.length);

            for (var i = 0; i < data.result.length; i++) {

                var visits = data.result[i];
                //var str = visits.CreatedAt;
                //var res = str.substring(0, 10);
                // var data = new Date(data.result[i].CreatedAt);
                //visits.CreatedAt = res;

                console.log("befor" + i);
                VisitsList.visitsArray.push(visits);
                console.log("after" + i);

            }
            //alert(JSON.stringify(data));

            return visitsArray;
        },
        function(error) {
            alert(JSON.stringify(error));
        });

exports.VisitsList = VisitsList;
