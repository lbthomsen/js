// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone', 
    facebook_api: 'libs/facebook/facebook-api', 
    async: 'libs/requirejs-plugins/async', 
    depend: 'libs/requirejs-plugins/depend', 
    font: 'libs/requirejs-plugins/font', 
    goog: 'libs/requirejs-plugins/goog', 
    json: 'libs/requirejs-plugins/json', 
    noext: 'libs/requirejs-plugins/noext', 
    mdown: 'libs/requirejs-plugins/mdown', 
    propertyParser: 'libs/requirejs-plugins/propertyParser', 
    markdownConverter: 'libs/requirejs-plugins/markdownConverter', 
    templates: '../templates'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){
  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
