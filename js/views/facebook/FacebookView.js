define([
  'jquery',
  'underscore',
  'backbone',
  'models/facebook/FacebookUser',
  'text!templates/facebook/facebookTemplate.html'
], function($, _, Backbone, FacebookUser, facebookTemplate){

    console.debug("Loading FacebookView");

    var FacebookView = Backbone.View.extend({
        el: $("#fb-login"), 

        initialize: function() {

            console.debug("Initializing FacebookView");

            var that = this;

            that.render();

        }, 

        render: function() {

            console.debug("Rendering FacebookView");

            var compiledTemplate = _.template(facebookTemplate);
            this.$el.html(compiledTemplate);
        }

    });

    return FacebookView;
  
});
// vim: ts=4 et nowrap
