var Backbone = require('backbone');
var BitterCollection = require('./bitterCollection');
var BitterCollectionView = require('./bitterCollectionView');
var BitterFormView = require('./bitterFormView');
var $ = require('jquery');


$(document).ready(function () {
  var bitterCol = new BitterCollection();
  var bitterFormView = new BitterFormView();
});
