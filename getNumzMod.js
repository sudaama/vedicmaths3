// inlineDisplayId is id of display of the actual final number (multiplicand or multiplier)

window.onload = getNumzVar;

var getNumzVar = function(inlineDisplayId, numberLabel, toggle, numberIndex) {
	return function() {
		var firstform = document.forms[numberIndex];
		var txt = "";
		var txtstr = "";		// numberIndex is the index position of the number entered (for multiple number entries)
		var txtarray1 = [];		// will contain an array of numbers, firstform.elements[0] contains the sign
								// firstform.elements[1] contains the number, 
								// firstform.elements[i].value gives sign or number depending
		var digitArray1 ;
		var temp1 = [];			// create temp array to store form element values: signs and digits in sequence
		
		// take number of buttons into consideration...below code works for 5 buttons
		for (var i = 0; i < (firstform.length); i++) {
			txt += firstform.elements[i].value;			// 5 buttons in form field before digits
			
			// if even number of buttons then run this code (refactor at some stage)
			if (amntButts % 2 == 0){
				if(i % 2 == 0){ // even number of buttons.
					temp1.push(firstform.elements[i].value);	
				}
				else {			// else if even i.e. a sign, just push to array as it is
					temp1.push(parseInt(firstform.elements[i].value) );
				}
			}

			else {	
				if(i % 2 != 0){ // odd number of buttons makes the first i in display also odd 
					temp1.push(firstform.elements[i].value);	
				}
				else {			// else if even i.e. a sign, just push to array as it is
					temp1.push(parseInt(firstform.elements[i].value) );
				}	// else if even number of buttons run this code
			}	
		}

		// console.log(temp1);
		// Using closure created previously...see signDigitProp.js
		digitArray1 = crtSingArr(temp1); 		// 	see crtSingArr declaration in signDigitProp 			
		var singleDigitArray = new ArrayDigits(temp1);	// create an array of SingleDigit elements
		var signedDigitz = singleDigitArray.getNum();	// create an array of Signed Digits
		console.log("array of signed digits", signedDigitz);						// display array of signed digits

		console.log(digitArray1() );
		console.log(txt);
		
		// bigSignDigitzArr.push(signedDigitz);

		getvinculumNum = getvinculumFunk(txt); 
		
		switch(toggle)  {
			case "mixed":
			// txtarray1 = getvinculum(txt);		// just use this textarray1 for mixed number (1)
			txtarray1 = getvinculumNum;
			break;		
				
			case "ordinary":
			// txtarray1 = convert2OrdForm(getvinculum(txt));
			txtarray1 = convert2OrdForm(getvinculumNum);
			break;

			case "vinculum":
			// txtarray1 = ord2VinReal(convert2OrdForm(getvinculum(txt)));
			txtarray1 = ord2VinReal(convert2OrdForm(getvinculumNum));
			break;
		}
				
		for(var j = 0; j < txtarray1.length; j++) {
			if(txtarray1[j] < 0) {
				txtstr += '<span class="rekhank inputdisplay">'+ -(txtarray1[j]) + '</span>'+ "&nbsp"; 
			}
			else if(txtarray1[j] == 0){ 
				txtstr += '<span class="zero inputdisplay">' + txtarray1[j] + '</span>' + "&nbsp";
			} 
			else {	// txtarray1[j] > 0 i.e. all digits greater than 0
				txtstr += '<span class="ord inputdisplay">' + txtarray1[j] + '</span>' + "&nbsp";
			}
		}
		// dw1 is id in display under multipler heading 
		// txtstr = txtarray1.join("");
		document.getElementById(inlineDisplayId).innerHTML = txtstr;
		
		if(document.getElementById(numberLabel)){
			document.getElementById(numberLabel).innerHTML = "Number Form: " + '<span class="toggle">' + toggle + '</span>';
<<<<<<< HEAD
		}					
=======
		}		
							
>>>>>>> offshoot1
		return txtarray1;	// txtarray1 as function return value  
	};
};


// create a separate function that calculates the pure signed digits
// elementNum refers to the index of the global array of numbers...
var getSigned = function(numberIndex, elementNum) {
		
	return function() {
		var firstform = document.forms[numberIndex];
		var txt = "";
		var txtstr = "";		// numberIndex is the index position of the number entered (for multiple number entries)
		var txtarray1 = [];		// will contain an array of numbers, firstform.elements[0] contains the sign
								// firstform.elements[1] contains the number, 
								// firstform.elements[i].value gives sign or number depending
		var digitArray1 ;
		var temp1 = [];			// create temp array to store form element values: signs and digits in sequence
		
		// take number of buttons into consideration...below code works for 5 buttons
		for (var i = 0; i < (firstform.length); i++) {
			txt += firstform.elements[i].value;			// 5 buttons in form field before digits
			
			// if even number of buttons then run this code (refactor at some stage)
			if (amntButts % 2 == 0){
				if(i % 2 == 0){ // even number of buttons.
					temp1.push(firstform.elements[i].value);	
				}
				else {			// else if even i.e. a sign, just push to array as it is
					temp1.push(parseInt(firstform.elements[i].value) );
				}
			}

			else {	
				if(i % 2 != 0){ // odd number of buttons makes the first i in display also odd 
					temp1.push(firstform.elements[i].value);	
				}
				else {			// else if even i.e. a sign, just push to array as it is
					temp1.push(parseInt(firstform.elements[i].value) );
				}	// else if even number of buttons run this code
			}	
		}

		var singleDigitArray2 = new ArrayDigits(temp1);	// create an array of SingleDigit elements
		var signedDigitz2 = singleDigitArray2.getNum();	// create an array of Signed Digits
		console.log("proper array of signed digits", signedDigitz2);						// display array of signed digits
		
		
		// Have written this back-to-front but it still works
		// If the global array has at least one array in it then pop off the last one
		// and push on the new array. Basically, this routine refreshes a particular number array 
		if(bigSignDigitzArr.length != 0 ){
			if(bigSignDigitzArr[elementNum]){
				bigSignDigitzArr[elementNum].pop();
				bigSignDigitzArr[elementNum].push(signedDigitz2);
			}
			else{ // if element does not exist, then create it
				bigSignDigitzArr.push([]);
				bigSignDigitzArr[elementNum].pop();
				bigSignDigitzArr[elementNum].push(signedDigitz2);	
			}
		}
			
		else {	// if no elements in array whatsoever, add element (this code should be first!)
			bigSignDigitzArr.push([]);
			bigSignDigitzArr[elementNum].pop();
			bigSignDigitzArr[elementNum].push(signedDigitz2);
		}	
	};

return signedDigitz2;

};