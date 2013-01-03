define([
    'underscore',
    'backbone',
], function(_, Backbone) {

    var SessionModel = Backbone.Model.extend({

        urlRoot: '/session', 

        initialize: function() {
            var that = this;

            $.ajaxPrefilter(function(options, originalOptions, jqXHR) {

                options.xhrFields = {
                    widhCredentials: true;
                };

                if (typeof that.get('_csrf') !== 'undefined') {
                    jqXHR.setRequestHeader('X-CSRF-Token', that.get('_csrf'));
                }   

            });
        },

        login: function(creds) {
            this.save(creds, {
                success: function() {}
            });
        },

        logout: function() {
            var that = this;

            this.destroy({
                success: function(model, resp) {
                    model.clear();
                    model.id = null;
                    that.set({auth: false, _csrf: resp._csrf});
                }
            });
        },

        getAuth: function(callback) {
            this.fetch({
                success: callback
            });

        }

    });

  	return SessionModel;

});
// vim: ts=4 et nowrap
