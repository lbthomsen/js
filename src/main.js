// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: '../assets/libs/jquery/jquery',
    underscore: '../assets/libs/underscore/underscore-min',
    backbone: '../assets/libs/backbone/backbone', 
    text: '../assets/libs/text/text', 
    facebook_api: '../assets/libs/facebook/facebook-api', 
    async: '../assets/libs/requirejs-plugins/async', 
    depend: '../assets/libs/requirejs-plugins/depend', 
    font: '../assets/libs/requirejs-plugins/font', 
    goog: '../assets/libs/requirejs-plugins/goog', 
    json: '../assets/libs/requirejs-plugins/json', 
    noext: '../assets/libs/requirejs-plugins/noext', 
    mdown: '../assets/libs/requirejs-plugins/mdown', 
    propertyParser: '../assets/libs/requirejs-plugins/propertyParser', 
    markdownConverter: '../assets/libs/requirejs-plugins/markdownConverter', 
    templates: '../templates'
  }

});

require([
  // Load our app module and pass it to our definition function
  'app',

], function(App){

  console.debug("Loading main.js");

  // The "app" dependency is passed in as "App"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  App.initialize();
});
