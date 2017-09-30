/* This forms the basis of a function that can that multiple fresh numbers 
*/

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





var createFreshNumId = "freshId_1";
var freshNumArray = [1, 2, 3, 4];		// this represents a typical array of signed digits 

var fresh = addFreshNum("freshId_1", freshNumArray);

fresh();


 