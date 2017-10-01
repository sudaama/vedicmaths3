/* This forms the basis of a function that can that multiple fresh numbers 
*/

// Routine for generating and removing fresh numbers on the fly 
// we need to add form elements here

var addFreshNum = function(freshId, freshNumArr) {
 		return function() {
    	var newDiv = document.createElement('div');
      newDiv.className = "freshNum";
      // var html = '<p id="' + freshId + '" ' + 'class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      var html = '<p class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      html += '<form id="multiplicandFrm" action="#">' + '<div id="multiplicand"></div>' + '<div id="numLabel"></div>' +
    '</form>' + '<div id="dw1" class="margTop"></div>';
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





 