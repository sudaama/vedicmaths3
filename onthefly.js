/* This forms the basis of a function that can that multiple fresh numbers */

// Routine for generating and removing fresh numbers on the fly 
// we need to add form elements here
// need to replace fresshNumArr with a number object that has methods to change it, as before
// ie. ord, mix, vin

window.onload = addFreshNum, removeFreshNum

var addFreshNum = function(freshNumArr, multNumId) {
 		return function() {
 		var freshFrmId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for form id
 		var freshNumId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for Num id


    	var newDiv = document.createElement('div');
      	newDiv.className = "freshNum";
      	var html = '<p class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
    	html += '<form id=' + '"freshFrmId_' + freshFrmId + '"' + 'action="#">' 
    	+ '<div id="freshNumId_' + freshNumId +'"> </div>' + '<div id="numLabel"></div>' +
    	'</form>' + '<div id="dw1" class="margTop"></div>';
    	// temporary tester code for buttIdAdd and buttIdRemove
    	var buttIdAdd = 1;
    	var buttIdRemove = 1;
    	
    	html += '<h4>Vedic Number Transmutor</h4>' + '<hr>' + 
                   '<div><p class="text-vedic"><button type="button" id="butt_' + buttIdAdd + '"' + 
                   'class="rounded padMe addColor" data-toggle="tooltip" data-placement="left"' + 
                   'title="Add a digit: positive (+) or negative (-)">Add Digit (+)</button>';

    	html += '<button type="button" id="buttRemove_' + buttIdRemove + '"' +  
    		'class="rounded padMe remColor" data-toggle="tooltip" data-placement="right"' + 
    		'title="Remove a digit">Remove Digit (-)</button></p></div>';
      
      	newDiv.innerHTML = html;

      	var butElem = document.getElementById(multNumId);	// insert the id of the number container
      	butElem.appendChild(newDiv)
    	};
 };
 

var removeFreshNum = function(divname) {                          // create a closure...remove a digit.
    return function() {
        var getparentDiv = document.getElementById(divname);
        getparentDiv.removeChild( getparentDiv.lastChild );
    };
};





 