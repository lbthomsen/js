define([
  'jquery',
  'underscore',
  'backbone',
  'modules/sidebar/SidebarView',
  'text!templates/terms/termsTemplate.html'
], function($, _, Backbone, SidebarView, termsTemplate){

  var TermsView = Backbone.View.extend({
    el: $("#page"),

    render: function(){
      
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(termsTemplate);

      var sidebarView = new SidebarView();
      sidebarView.render();
 
    }

  });

  return TermsView;
  
});
