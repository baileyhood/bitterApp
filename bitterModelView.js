var Backbone = require('backbone');
var tmpl = require('./templates');
var _ = require('underscore');

module.exports = Backbone.View.extend ({
  tagName: 'article',
  template: _.template(tmpl.bitterTmpl),
  editTemplate: _.template(tmpl.editMessage),
  initialize: function () {},
  render: function(){
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);
      return this;
  },
  events: {
    'click edit-button': 'deletePost',
    'click .edit-button' : 'toggleEdit',
  },
  toggleEdit: function () {
    this.$el.append(this.editTemplate(this.model.toJSON())).toggleClass();
  }
});
