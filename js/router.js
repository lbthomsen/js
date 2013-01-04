// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/HomeView',
    'views/facebook/FacebookView', 
    'views/about/AboutView',
    'views/footer/FooterView'
], function($, _, Backbone, HomeView, FacebookView, AboutView, FooterView) {

    console.debug("Loading router.js");
  
    var AppRouter = Backbone.Router.extend({

        routes: {
            // Define some URL routes
            'about': 'showAbout', 
      
            // Default
            '*actions': 'defaultAction'
        }
    });
  
    var initialize = function() {

        console.debug("Initializing router.js");

        var app_router = new AppRouter;

        app_router.on('route:showAbout', function() {

            console.debug("Router event: showAbout");

            var aboutView = new AboutView();
            aboutView.render();

        });
    
        app_router.on('route:defaultAction', function (actions) {

            console.debug("Router event: default");
     
            // We have no matching route, lets display the home page 
            var homeView = new HomeView();
            homeView.render();

            // Add the facebook Login/Logout 
            var facebookView = new FacebookView();

            // unlike the above, we don't call render on this view
            // as it will handle the render call internally after it
            // loads data 
            var footerView = new FooterView();

        });

        Backbone.history.start();
    };

    return { 
        initialize: initialize
    };
});
// vim: ts=4 et nowrap
