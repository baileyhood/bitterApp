var Backbone = require ('backbone');

module.exports = Backbone.Model.extend ({
  idAttribute: '_id',
  urlRoot: 'http://tiny-tiny.herokuapp.com/collections/baileybitter',
  initialize: function () {
    console.log ("Our bitterModel is working!");
  }
});
