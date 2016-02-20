var observable = require("data/observable");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive("49mwdp1w40tbjnlg");

var RegisterView = new observable.Observable();

//RegisterView.username="";
//RegisterView.password="";

var username = 'jsmith';
var password = '111111';

var attrs = {
    Email: 'john.smith1@telerik.com',
    DisplayName: 'John Smith'
};

RegisterView.tapAction = function () {
console.log(RegisterView.username);
console.log(RegisterView.password);


everlive.Users.register(username,
    password,
    attrs,
    function(data) {
        console.log('success');
        console.log(JSON.stringify(data));
    },
    function(error) {
        console.log('error');
        console.log(JSON.stringify(error));
    });
};

exports.RegisterView = RegisterView;