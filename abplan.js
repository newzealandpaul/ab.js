Check if user has already been assigned a variation.

if assigned variation then queue/schedule the correct variation function.

if user has not been assigned then choose a random variation and set a cookie with the variation name and then queue/schedule the correct variation function.

push custom var into _gaq 

var _gaq = _gaq || [];
_gaq.push(["_setCustomVar", 1, "AB_{test_name}", "{variation}", 3]);
 
On page load execute variation function


var frontpage_alternative_test = new ABTest("my test", 4){
   
   "frontpage_variation": function(){
      documnet.getElementById('asd');
   },
   "control": function(){}
})


