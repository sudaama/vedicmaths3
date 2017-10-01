/* This forms the basis of a function that can that multiple fresh numbers 
*/

// Routine for generating and removing fresh numbers on the fly 
// we need to add form elements here

window.onload = addFreshNum, removeFreshNum

var addFreshNum = function(freshFrmId, freshNumId, freshNumArr) {
 		return function() {
    	var newDiv = document.createElement('div');
      newDiv.className = "freshNum";
      // var html = '<p id="' + freshId + '" ' + 'class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      var html = '<p class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
      html += '<form id="freshFrmId_' + freshFrmId[0] + '"' + ' action="#">' + '<div id="freshNumId_' + freshNumId[0] +'"></div>' + '<div id="numLabel"></div>' +
    '</form>' + '<div id="dw1" class="margTop"></div>';
      newDiv.innerHTML = html;
      var butElem = document.getElementById(freshFrmId[0]);
      butElem.appendChild(newDiv)
    };
 };
 





var removeFreshNum = function(divname) {                          // create a closure...remove a digit.
    return function() {
        var getparentDiv = document.getElementById(divname);
        getparentDiv.removeChild( getparentDiv.lastChild );
    };
};





 