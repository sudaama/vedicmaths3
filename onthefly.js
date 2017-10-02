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
 		var buttIdAdd = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for buttAdd id
 		var buttIdRemove = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for buttRemove id
 		var mixedId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for mixedId id
 		var ordinaryId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for ordinaryId id
 		var vinculumId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for vinculumId id
 		var digitDisplayId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for digitDisplay id


    	var newDiv = document.createElement('div');
      	newDiv.className = "freshNum";
      	// var html = '<p class="freshNum" >A freshNum goes here: ' + freshNumArr + '</p>';
    	var html = '';
    	html += '<form id=' + '"freshFrmId_' + freshFrmId + '"' + 'action="#">' 
    	+ '<div id="freshNumId_' + freshNumId +'"> </div>' + '<div id="numLabel"></div>' +
    	'</form>';

    	html +=	   '<div><p class="text-vedic"><button type="button" id="butt_' + buttIdAdd + '"' + 
                   'class="rounded padMe addColor" data-toggle="tooltip" data-placement="left"' + 
                   'title="Add a digit: positive (+) or negative (-)">Add Digit (+)</button>';

    	html += 	'<button type="button" id="buttRemove_' + buttIdRemove + '"' +  
    				'class="rounded padMe remColor" data-toggle="tooltip" data-placement="right"' + 
    				'title="Remove a digit">Remove Digit (-)</button></p>' +
    				'</div>';

    	html += 	'<div><p class="text-vedic"><button type="button" id="displayMixed_' + mixedId + '"' + 'class="rounded padMe"' + 
    				'data-toggle="tooltip" data-placement="left" title="Display the mixed number i.e. ' + 
    				'with (+) and (-) digits" data-placement="left" >Display: <span class="text-vedic">' + 
    				'Mixed Number</span></button>';

    	html += 	'<button type="button" id="displayOrdinary_' + ordinaryId + '"' + 'class="rounded padMe"' + 
    				'data-toggle="tooltip" data-placement="bottom" title="Display the ordinary number i.e. ' +
    				'with digits either all positive(+) or either all negative(-)" data-placement="left">' +
    				'Display: <span class="text-vedic">Ordinary Number</span></button>';

    	html += 	'<button type="button" id="displayVinculum_' + vinculumId + '"' + 'class="rounded padMe"' + 
    				'data-toggle="tooltip" data-placement="right" title="Display the Vinculum number i.e.  ' + 
    				'with (+) and (-) digits and each digit <= 5">Display: <span class="text-vedic">' + 
    				'Vinculum Number</span></button></p></div>';

    	html += 	'<div id="digitDisplayId_' + digitDisplayId + '"' + '>';
    	html += '<hr>';
      
      	newDiv.innerHTML = html;

      	var butElem = document.getElementById(multNumId);	// insert the id of the number container
      	butElem.appendChild(newDiv);

      	var dispId = "digitDisplayId_" + digitDisplayId;
      	var addSelect_1 = addSelectFunk(dispId);	// use the newly created digitDisplayId for the closure 
    	
    	var getAddButtId = document.getElementById("butt_" + buttIdAdd);	// get Id of newly created Add button
    	getAddButtId.addEventListener("click", addSelect_1);	// add event listener to add button
    	};

 };
 

var removeFreshNum = function(divname) {                          // create a closure...remove a digit.
    return function() {
        var getparentDiv = document.getElementById(divname);
        getparentDiv.removeChild( getparentDiv.lastChild );
    };
};





 