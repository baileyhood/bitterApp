var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');
var BitterFormView = require('./bitterFormView');
var $ = require('jquery');


$(document).ready(function () {
  var bitterCol = new BitterCollection();
  bitterCol.fetch().then(function (data) {
       console.log(bitterCol.models.length, "data", data);
       // data is ready
       var collection = new BitterCollection(data);
       console.log("collection", collection);
       var postMarkUp = new BitterCollectionView({collection: collection});
     });
  var bitterFormView = new BitterFormView();
});
