// You should change this to the URL where you are hosting the test page
var webURL = "http://aptonic.com/ab.js/example/test.html"
var cookieName = "abjs_variation";

var test = require('testling');


var ABUnitTestUtils = {};

ABUnitTestUtils.getCookie = function(c_name, win) {
   var theDocument = win.document;
   
   var i, x, y, ARRcookies = theDocument.cookie.split(";");
   for (i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
         return unescape(y);
      }
   }
   return "";
}

test('A/B unit tests', function(t) {
   t.log(window.navigator.appName);
   t.createWindow(webURL, function(win, $) {
      // Check we are actually on the A/B test page
      //t.equal(win.document.title, 'A/B Test Page', 'Test page <title> incorrect');

      // Check variation cookie not empty
      var cookieVariation = ABUnitTestUtils.getCookie("abjs_variation", win);
      //t.notEqual(cookieVariation, "", "abjs_variation cookie may not be empty")
      
      // Check variation cookie matches a variation function
      //t.ok(win.ABTestUtils.isFunction(win.ABTestVariationFunctions[this.assignedVariation]), "abjs_variation cookie does not match a variation function")
      t.end();
   });
});

EOF