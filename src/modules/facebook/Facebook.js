define([
    'jquery', 
    'underscore', 
    'backbone', 
    'facebook_api!appId:135472613277777'
], function($, _, Backbone, FacebookApi) {

    console.debug("Loading Facebook");

    var Facebook = Backbone.Model.extend({

        initialize: function(attributes, options) {

            console.debug("Initializing Facebook");

            options || (options = {});
            this.options = _.defaults(options, this.defaultOptions);

            _.bindAll(this, 'onLoginStatusChange');

            FB.Event.subscribe('auth.authResponseChange', this.onLoginStatusChange);
        },

        options: null,

        defaultOptions: {
            // see https://developers.facebook.com/docs/authentication/permissions/
            scope: ['email'], // fb permissions
            autoFetch: true, // auto fetch profile after login
            protocol: location.protocol
        },

        _loginStatus: null,

        isConnected: function() {

            console.debug("Facebook isConnected");

            return this._loginStatus === 'connected';
        },

        login: function(callback){

            console.debug("Facebook login");

            if (typeof callback === 'undefined') {
                callback = function() {};
            }
            FB.login(callback, { scope: this.options.scope.join(',') });
        },

        logout: function(){

            console.debug("Facebook logout");

            FB.logout();
        },

        updateLoginStatus: function(){

            console.debug("Facebook updateLoginStatus");

            FB.getLoginStatus(this.onLoginStatusChange);
        },

        onLoginStatusChange: function(response) {

            console.debug("Facebook onLoginStatusChange");

            if(this._loginStatus === response.status) return false;

            var event;

            if(response.status === 'not_authorized') {
                event = 'facebook:unauthorized';
            } else if (response.status === 'connected') {
                event = 'facebook:connected';
                if(this.options.autoFetch === true) this.fetch();
            } else {
                event = 'facebook:disconnected';
            }

            this.trigger(event, this, response);
            this._loginStatus = response.status;
        },

        parse: function(response) {

            console.debug("Facebook parse");

            var attributes = _.extend(response, {
                pictures: this.profilePictureUrls(response.id)
            });

            return attributes;
        },

        sync: function(method, model, options) {

            console.debug("Facebook sync");

            if(method !== 'read') throw new Error('Facebook is a readonly model, cannot perform ' + method);

            var callback = function(response) {
                if(response.error) {
                    options.error(response);
                } else {
                    options.success(response);
                }
                return true;
            };

            FB.api('/me', callback);
        },

        profilePictureUrls: function(id) {
            id || (id = this.id);
            var urls = {};
            _([ 'square', 'small', 'normal', 'large' ]).each(function(size){
                urls[size] = this.profilePictureUrl(id, size);
            }, this);

            return urls;
        },

        profilePictureUrl: function(id, size) {
            return [
                this.options.protocol,
                '//graph.facebook.com/',
                id,
                '/picture?type=',
                size,
                this.options.protocol.indexOf('https') > -1 ? '&return_ssl_resources=1' : ''
            ].join('');
        }, 

        getCopyright: function() {
            return "Copyright 2013 Netcom Partner";
        }

    });

    //scope.FacebookUser = FacebookUser;

    return Facebook;

});
// vim: ts=4 et nowrap
