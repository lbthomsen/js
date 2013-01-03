define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'text!templates/about/aboutTemplate.html'
], function($, _, Backbone, SidebarView, aboutTemplate){

  var AboutView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(aboutTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return AboutView;
  
});
