var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var BitterModelView = require('./bitterModelView');

module.exports = Backbone.View.extend({
  el: '.main-container',
  initialize: function () {
  },
  addOne: function (el) {
    var modelView = new BitterModelView ({});
    this.$el.append(modelView.render().el);
  },
  addAll: function () {
    this.$el.html('');
    _.each(this.collection.models, this.addOne, this);
  }
});
