var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");
var directory = "/res/";
var cameraModule = require("camera");
var Everlive = require('~/everlive.all.min');
var everlive = new Everlive("49mwdp1w40tbjnlg");
var imageModule = require("ui/image");


var photoAlbumModel = new observable.Observable();

photoAlbumModel.set("message", "Add new photos");

var backendArray = new observableArrayModule.ObservableArray();

photoAlbumModel.tapAction = function() {

    cameraModule.takePicture({
        width: 300,
        height: 300,
        keepAspectRatio: true
    }).then(function(picture) {
        var item = {
            itemImage: picture
        };
        backendArray.push(item);


        var file = {
            "Filename": Math.random().toString(36).substring(2, 15) + ".jpg",
            "ContentType": "image/jpeg",
            "base64": picture.toBase64String(enums.ImageFormat.jpeg, 100)
        };


        everlive.Files.create(file,
            function(data) {},
            function(error) {});

    });

};

exports.photoAlbumModel = photoAlbumModel;
