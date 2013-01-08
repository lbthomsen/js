define([
  'jquery',
  'underscore',
  'backbone',
  'modules/sidebar/SidebarView',
  'text!templates/privacy/privacyTemplate.html'
], function($, _, Backbone, SidebarView, privacyTemplate){

  var PrivacyView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(privacyTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return PrivacyView;
  
});
