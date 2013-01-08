define([
  'jquery',
  'underscore',
  'backbone',
  'modules/facebook/FacebookModel',
  'text!templates/facebook/loginTemplate.html',
  'text!templates/facebook/logoutTemplate.html'
], function($, _, Backbone, FacebookUser, loginTemplate, logoutTemplate){

    console.debug("Loading FacebookView");
    var facebookUser = new FacebookUser();

    var FacebookView = Backbone.View.extend({
        el: $("#fb-root"), 

        initialize: function() {

            console.debug("Initializing FacebookView");

            var that = this;

            that.render();

        }, 

        render: function() {

            console.debug("Rendering FacebookView");

            if (facebookUser.isConnected()) {
                console.debug("Facebook IS connected");
            } else { 
                console.debug("Facebook is NOT connected");
            }

            var compiledTemplate = _.template(loginTemplate);
            this.$el.html(compiledTemplate);
        }

    });

    return FacebookView;
  
});
// vim: ts=4 et nowrap
