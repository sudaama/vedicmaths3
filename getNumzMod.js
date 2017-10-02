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

		for (var i = 0; i < firstform.length; i++) {
			txt += firstform.elements[i].value;
			temp1.push(firstform.elements[i].value);
		}

		// Using closure created previously...see signDigitProp.js
		digitArray1 = crtSingArr(temp1);				
		console.log( digitArray1() );
		
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
		document.getElementById(numberLabel).innerHTML = "Number Form: " + '<span class="toggle">' + toggle + '</span>';
							
		return txtarray1 ;	// txtarray1 as function return value  
	};
};