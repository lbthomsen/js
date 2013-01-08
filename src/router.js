// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'modules/home/HomeView',
    'modules/facebook/FacebookView', 
    'modules/about/AboutView',
    'modules/privacy/PrivacyView',
    'modules/contact/ContactView',
    'modules/terms/TermsView',
    'modules/footer/FooterView'
], function($, _, Backbone, HomeView, FacebookView, AboutView, PrivacyView, ContactView, TermsView, FooterView) {

    console.debug("Loading router.js");
  
    var AppRouter = Backbone.Router.extend({

        routes: {
            // Define some URL routes
            'about': 'showAbout', 
            'privacy': 'showPrivacy', 
            'contact': 'showContact', 
            'terms': 'showTerms', 
            'canvas/': 'showCanvas', 
      
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
    
        app_router.on('route:showPrivacy', function() {

            console.debug("Router event: showPrivacy");

            var privacyView = new PrivacyView();
            privacyView.render();

        });
    
        app_router.on('route:showContact', function() {

            console.debug("Router event: showContact");

            var contactView = new ContactView();
            contactView.render();

        });
    
        app_router.on('route:showTerms', function() {

            console.debug("Router event: showTerms");

            var termsView = new TermsView();
            termsView.render();

        });
    
        app_router.on('route:defaultAction', function (actions) {

            console.debug("Router event: default");
     
            // We have no matching route, lets display the home page 
            var homeView = new HomeView();
            homeView.render();

        });

        console.debug("Initializing other views");
        var footerView = new FooterView();
        var facebookView = new FacebookView();

        Backbone.history.start();
    };

    return { 
        initialize: initialize
    };
});
// vim: ts=4 et nowrap
