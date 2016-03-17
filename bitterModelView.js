var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend ({
  tagName: 'article',
  template: _.template(tmpl.bitterTmpl),
  editTemplate: _.template(tmpl.editMessage),
  initialize: function () {
    this.listenTo(this.model, 'change', this.addAll);
  },
  render: function(){
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
  },
  events: {
    'click .edit-button' : 'toggleEdit',
    'click .delete-button' : 'deletePost',
    'click .submit-edit-button' : 'editPost'
  },
  toggleEdit: function () {
    this.$el.append(this.editTemplate(this.model.toJSON())).toggleClass();
  },

  editPost: function (event) {
    event.preventDefault();
    console.log("Edit button is being pressed");
    this.model.set({
      user: this.$el.find('.user-edit').val(),
      date: this.$el.find('.date-edit').val(),
      postMessage: this.$el.find('.post-edit').val()
    });
  },

  deletePost: function () {
    event.preventDefault();
    console.log("Delete button is being pressed.");
    this.model.destroy();
  }

});
