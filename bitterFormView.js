var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');
var BitterModel = require('./bitterModel');

module.exports = Backbone.View.extend ({
    el: '.main-container',
    template: _.template(tmpl.addMessage),
    events: {
      'click .submit-post-button' : 'addPost'
    },
    initialize: function () {
      this.model = new BitterModel({});
      this.render();
    },
    render: function () {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
    },

    addPost: function () {
      event.preventDefault();
      console.log("Add Post Button is Clicked?");
      var newPost ={
        user: this.$el.find('.user-input').val(),
        date: this.$el.find('.date-input').val(),
        postMessage: this.$el.find('.post-input').val(),
      };
      var newPostMessage = new BitterModel(newPost);
      this.$el.find('input').val('');
      newPostMessage.save();
    },


    });
