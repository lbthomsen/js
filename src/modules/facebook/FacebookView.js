define([
  'jquery',
  'underscore',
  'backbone',
  'modules/facebook/Facebook',
  'text!templates/facebook/loginTemplate.html',
  'text!templates/facebook/logoutTemplate.html'
], function($, _, Backbone, Facebook, loginTemplate, logoutTemplate){

    console.debug("Loading FacebookView");
    //var facebookModel = new FacebookModel();

    var FacebookView = Backbone.View.extend({
        el: $("#fb-root"), 

        initialize: function() {

            console.debug("Initializing FacebookView");

            var that = this;

            console.debug("Testing connection to model: " + this.model.getCopyright());

            that.render();

        }, 

        events: {
            "click #fbLogin": "login", 
            "click #fbLogout": "logout"
        }, 

        render: function() {

            console.debug("Rendering FacebookView");

            if (facebookModel.isConnected()) {
                console.debug("Facebook IS connected");
            } else { 
                console.debug("Facebook is NOT connected");
            }

            var compiledTemplate = _.template(loginTemplate);
            this.$el.html(compiledTemplate);
        }, 

        login: function() {
            console.debug("Login clicked");
            facebookModel.login();
        }, 

        logout: function() {
            console.debug("Logout clicked");
        }

    })

    return FacebookView;
  
});
// vim: ts=4 et nowrap
