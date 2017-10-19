/* This forms the basis of a function that can that multiple fresh numbers */

// Routine for generating and removing fresh numbers on the fly 
// we need to add form elements here
// need to replace fresshNumArr with a number object that has methods to change it, as before
// ie. ord, mix, vin

window.onload = addFreshNum, removeFreshNum;
var elementNum = 0;


var addFreshNum = function(multNumId) {
 		return function() {
 		var freshFrmId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for form id
 		var freshNumId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for Num id
 		var buttIdAdd = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for buttAdd id
 		var buttIdRemove = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for buttRemove id
 		var mixedId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for mixedId id
 		var ordinaryId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for ordinaryId id
 		var vinculumId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for vinculumId id
 		var digitDisplayId = Math.floor(Math.random() * 10000000) + 1;	// generate a random number for digitDisplay id
    var numberDisplayId = Math.floor(Math.random() * 10000000) + 1;  // generate a random number for numberDisplay id
    var numLabelId = Math.floor(Math.random() * 10000000) + 1;  // generate a random number for numLabelId id
    var add2bigArrayId = Math.floor(Math.random() * 10000000) + 1;  // generate a random number for 'add-to-global' id
    var add2bigArray2Id = Math.floor(Math.random() * 10000000) + 1;  // generate dummy random number for 'add-to-global' id
// These five buttons are messing up the code used for getting the element values from the form
// Either move them or add another dummy button and re-adjust code in getNumzMod.js

    	var newDiv = document.createElement('div');
      newDiv.className = "freshNum";
      var html = '';
    	html +=     '<form id=' + '"freshFrmId_' + freshFrmId + '"' + 'action="#">' + 
                  '<div id="freshNumId_' + freshNumId +'"> </div>'; 

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
            
      html +=   '<button type="button" id="buttAdd2BigArray_' + add2bigArrayId + '"' +  'class="rounded padMe"'
                + 'data-toggle="tooltip" data-placement="right" title="Add Mix Number to Global">' + 
                'Add Number to Global Array</button>';
      
      html +=   '<button type="button" id="buttAdd2BigArray2_' + add2bigArray2Id + '"' +  'class="rounded padMe"'
                + 'data-toggle="tooltip" data-placement="right" title="Add Dummy Number to Global">' + 
                'Dummy Test Button</button>';
      

    	html += 	'<div id="digitDisplayId_' + digitDisplayId + '"' + '>';

      html +=  '<div id="numLabel_' + numLabelId + '"' + '></div>';

    	html += 	'</form>'; // end of the form

    	// html += '<hr>';
      
      newDiv.innerHTML = html;
      var butElem = document.getElementById(multNumId);	// insert the id of the number container
      butElem.appendChild(newDiv);

      // add digit and display  
      var dispAddId = "digitDisplayId_" + digitDisplayId; // use this id for both add and remove
      var addSelect_1 = addSelectFunk(dispAddId);	// use the newly created digitDisplayId for the closure 
    	var buttIdAddVar = "butt_" + buttIdAdd;
    	var getAddButtId = document.getElementById(buttIdAddVar);	// get Id of newly created Add button
    	
      // Proper number display section, 
      var newDiv2 = document.createElement('div');
      newDiv2.className = "freshDisplay";
      var html2 = '';
      html2 = '<div id="numberDisplayId_' + numberDisplayId + '" ' + 'class="margTop"></div>';
      newDiv2.innerHTML = html2;
      var butElem2 = document.getElementById(multNumId); // insert the id of the number container
      butElem2.appendChild(newDiv2);

      var numDispProp =  'numberDisplayId_' + numberDisplayId;  // convenient id
      var numLabel = 'numLabel_' + numLabelId; 

      var formId = 'freshFrmId_' + freshFrmId;                  // convenient form id
      
      var getNumzFunkMixed = getNumzVar(numDispProp, numLabel, "mixed", formId);    // Closure set for id ="dw1"
      var getNumzFunkOrdinary = getNumzVar(numDispProp, numLabel, "ordinary", formId);
      var getNumzFunkVinculum = getNumzVar(numDispProp, numLabel, "vinculum", formId);

      var disMixNumId = 'displayMixed_' + mixedId;// inlineDisplayId is id of display of the actual final number (multiplicand or multiplier)

      var getMixNum = document.getElementById(disMixNumId);
      getMixNum.addEventListener("click", getNumzFunkMixed);

      var disMixOrdId = 'displayOrdinary_' + ordinaryId;
      var getOrdNum = document.getElementById(disMixOrdId);
      getOrdNum.addEventListener("click", getNumzFunkOrdinary);

      var disMixVinId = 'displayVinculum_' + vinculumId;
      var getVinNum = document.getElementById(disMixVinId);
      getVinNum.addEventListener("click", getNumzFunkVinculum);

      // only add event Listener for add and remove buttons after 

// var freshNumArray = [1, 2, 3, 4];    // this represents a display buttons have
      // been assigned
      getAddButtId.addEventListener("click", addSelect_1);	// add event listener to add button
    	getAddButtId.addEventListener("click", getNumzFunkMixed);


    	// remove digit from display
      var removeSelectFunk_1 = removeSelectFunk(dispAddId);	// create closure using same newly created display id
    	var buttRemoveVar = "buttRemove_" + buttIdRemove;		// use convenient id equivalent 
    	var getRemoveButtId = document.getElementById(buttRemoveVar); // get id of remove button
    	
    
      getRemoveButtId.addEventListener("click", removeSelectFunk_1);	// assign click to button thru id
    	getRemoveButtId.addEventListener("click", getNumzFunkMixed);
      

      // elementNum++;
      
      var getSignedProp = getSigned(formId, elementNum++);       // creating a closure for siged digit array
      var buttSignedDig ='buttAdd2BigArray_' + add2bigArrayId;
      var getSignedDig = document.getElementById(buttSignedDig);
      getSignedDig.addEventListener("click", getSignedProp);
    	};
 };
  




var removeFreshNum = function(divname) {                          // create a closure...remove a number
    return function() {
          if(divname){
            var getparentDiv = document.getElementById(divname);
            if(getparentDiv.lastChild){
                getparentDiv.removeChild( getparentDiv.lastChild );
               console.log("just took off last child"); 
            }
          }
          
<<<<<<< HEAD
         // elementNum--;     // when a number is destroyed decrement the count by one.
=======
         elementNum--;     // when a number is destroyed decrement the count by one.
>>>>>>> offshoot2
    };
};


/*
var removeGlobElem  = function() {
    return function() {
        if(bigSignDigitzArr.length != 0) { // if array exists
            bigSignDigitzArr.pop();
            console.log("just took off last element in array");
        }
    };
};
*/
 var amntButts = 7;  // number of buttons in form besides the create number buttons (make global)     


 //  bigSignDigitzArr = []; // make this a Global variable


 // set up button to add signed arrays to global array
      
