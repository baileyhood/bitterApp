var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend ({
  tagName: 'article',
  template: _.template(tmpl.bitterTmpl),
  editTemplate: _.template(tmpl.editMessage),
  initialize: function () {
    this.listenTo(this.collection, 'update', this.addAll);
    this.listenTo(this.collection, 'change', this.addAll);
  },
  render: function(){
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
  },
  events: {
    'click .edit-button' : 'toggleEdit',
    'click .delete-button' : 'deletePost'
  },
  toggleEdit: function () {
    this.$el.append(this.editTemplate(this.model.toJSON())).toggleClass();
  },

  deletePost: function () {
    console.log("Delete button is being pressed.");
    this.model.destroy();
  }

});
