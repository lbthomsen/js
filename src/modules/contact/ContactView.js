define([
  'jquery',
  'underscore',
  'backbone',
  'modules/sidebar/SidebarView',
  'text!templates/contact/contactTemplate.html'
], function($, _, Backbone, SidebarView, contactTemplate){

  var ContactView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(contactTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return ContactView;
  
});
