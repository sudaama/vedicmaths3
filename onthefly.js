/* This forms the basis of a function that can that multiple fresh numbers 
*/

// Routine for generating and removing fresh numbers on the fly 

var addFreshNum = function(freshId, freshNumArr) {
 		return function() {
    	var newDiv = document.createElement('div');
      newDiv.className = "freshNum";
      // var html = '<p id="' + freshId + '" ' + 'class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      var html = '<p class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      newDiv.innerHTML = html;
      var butElem = document.getElementById(freshId);
      butElem.appendChild(newDiv)
    };
 };
 
var removeFreshNum = function(divname) {                          // create a closure...remove a digit.
    return function() {
        var getparentDiv = document.getElementById(divname);
        getparentDiv.removeChild( getparentDiv.lastChild );
    };
};





 