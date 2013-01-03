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
  
    var AppRouter = Backbone.Router.extend({

        routes: {
            // Define some URL routes
            'about': 'showAbout', 
      
            // Default
            '*actions': 'defaultAction'
        }
    });
  
    var initialize = function() {

        var app_router = new AppRouter;

        app_router.on('route:showAbout', function() {

            var aboutView = new AboutView();
            aboutView.render();

        });
    
        app_router.on('route:defaultAction', function (actions) {
     
            // We have no matching route, lets display the home page 
            var homeView = new HomeView();
            homeView.render();

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
