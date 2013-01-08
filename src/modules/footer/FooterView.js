define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, footerTemplate){

  console.debug("Loading FooterView");

  var FooterView = Backbone.View.extend({
    el: $("#footer"),

    initialize: function() {

      console.debug("Initializing FooterView");

      var that = this;

      that.render();

    },

    render: function(){

      console.debug("Rendering FooterView");

      var compiledTemplate = _.template(footerTemplate);
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
