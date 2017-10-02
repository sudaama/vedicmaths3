/* Ordinary number to vinculum conversion
*
*
*/
		
		
		function ord2VinReal(txtarray1)			// Takes an array of digits
			{
			var str = [];
			
			var countneg = 0;
			str = txtarray1;
			var numSign = "notallneg";		// Default status of inputted number
			var numSignArray = []; 
			
			numSignArray = pureNegNumCheck(str);		// check the status of the inputted number: change numSign to negative if all digits 
													// are negative or zero. Also returns array of positive digits
			str = numSignArray[0];					// Get array of positive digits if necessarry and change numSign to negative 
			numSign = numSignArray[1];
							
			str.unshift(0);							// add zero at beginning
			
			var text = "";
			var i;
			var vn = "";
			var flag = "down";
			var vnarray = [];
			var vnarraypure = [];
		    var textstr = "";

			vnarray.unshift(0);
			
			var len = str.length;
			i = len - 1;					// start counter at units end.
			var vnex;
			var vnexReal;
		
			do {				// do 1
				if((str[i]) < 5 && flag === "down") {	// if digit is less than 5 put flag down
					vnex = (str[i]);					//
					vnarray[i] = (str[i]);
					vnarraypure[i] = rekhankconv(vnex);
					i--;
				}					
				else {   			// else 1
					flag = "up";						// else if digit >= 5 put flag up 
					if((str[i]) === 0) {		
						vnex = (10 - (str[i]));									
						vnarray[i] = 10 - (str[i]);
						vnarraypure[i] = rekhankconv(vnex);
					}
					else {
						vnex = (10 - (str[i]) );		
						vnarray[i] = -(10 - (str[i]) );		
						vnarraypure[i] = rekhankconv(vnex);			
					}			
					i--;
					if((str[i]) >= 5 && flag === "up") {   
						while((str[i]) >= 5 && i >= 0 && flag !== "down"){ // while 1
							if((str[i]) === 0) {
								vnex = (9 - (str[i]));
								vnarray[i] = (9 - (str[i]) );
								vnarraypure[i] = rekhankconv(vnex);
							}
							else {	
								vnex = (9 - (str[i]) );	
								vnarray[i] = -(9 - (str[i]) );
								vnarraypure[i] = rekhankconv(vnex); 
							}			
							i--;	
							if((str[i]) < 5 ){
								vnex =  (str[i]) + 1;
								vnarray[i] = ((str[i]) + 1);
								vnarraypure[i] = rekhankconv(vnex);
								i--;
								flag = "down";
							}
						}	// end of while 1			
					}
					else if((str[i]) < 5 ){
						vnex = (str[i]) + 1;
						vnarray[i] = ((str[i]) + 1);
						vnarraypure[i] = rekhankconv(vnex);
						i--;
						flag = "down";
					}
				}		// end else 1
			}
			while(i >= 0)			// end do 1
    
    
		function rekhankconv(vnex)
			{
				if(vnex < 0) {
					vnarraypure[i] = -(-vnex);
				}
				else {
					vnarraypure[i] = vnarray[i];
				}
				
				return vnarraypure[i];
			}
		
		function pureNegNumCheck(string)
			{
				var j;
				var strCon = string;
				var firstlen;
				firstlen = strCon.length;
				for(j = 0; j < firstlen; j++) {
					if(strCon[j]  <= 0) {
						countneg++;
					}
				}
				if(countneg === firstlen) {
					numSign = "negative";
				}
				else {
					numSign = "notallneg";
				}
				// make all of the digits negative and process as usual
				// Re-adjust afterwards, at end.
				if(numSign === "negative"){								
					for(j = 0; j < firstlen; j++) {
						strCon[j] = -strCon[j]
					}
				}
				return [strCon, numSign];				// 	Return array 
			}
		
		if(numSign === "negative") {
			for(j = 0; j < vnarraypure.length; j++) {
				vnarraypure[j] = -vnarraypure[j]
			}
		}
		
		vnarraypure = leadingZeroStrippa(vnarraypure);  // Strip out leading zeros again	

		return vnarraypure;
		} // end of ord2VinReal function 

	
		
