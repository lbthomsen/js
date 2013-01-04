define([
  'jquery',
  'underscore',
  'backbone',
  'models/owner/OwnerModel',
  'text!templates/footer/footerTemplate.html'
], function($, _, Backbone, OwnerModel, footerTemplate){

  console.debug("Loading FooterView");

  var FooterView = Backbone.View.extend({
    el: $("#footer"),

    initialize: function() {

      console.debug("Initializing FooterView");

      var that = this;
      var options = {query: 'lbthomsen'}
     

      var onDataHandler = function(collection) {
          that.render();
      }

      this.model = new OwnerModel(options);
      this.model.fetch({ success : onDataHandler, dataType: "jsonp"});

    },

    render: function(){

      console.debug("Rendering FooterView");

      var data = {
        owner: this.model.toJSON(),
        _: _ 
      };

      var compiledTemplate = _.template( footerTemplate, data );
      this.$el.html(compiledTemplate);
    }

  });

  return FooterView;
  
});
