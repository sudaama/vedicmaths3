/* This function either calls numLessThanZero or numZeroOrMore, depending on whether the 
 * first digit of the inputted number is negative or positive. It returns a number in 
 * which the digits are all either positive or negative.
*/

function convert2OrdForm(txtarray1) {
	var i, vinNum = [];
    vinNum = txtarray1;
    vinNum = vinNum.slice();					// make a shallow copy of vinNum
   	vinNum = leadingZeroStrippa(vinNum);		// strip out any loose leading zeroes using leadingStrippa
   	// If 1st digit of vinculum number is less zero, i.e. negative then	
   	// NB 1st digit here is first element in array												
    if (vinNum[0] < 0){															
		vinNum = numLessThanZero(vinNum);													
  	}	
  													
	else {										// returns original final number  without unary negative signs
												// If 1st digit of vinculum number is positive	
		vinNum = numZeroOrMore(vinNum);
	}
	
	vinNum = leadingZeroStrippa(vinNum);		// Strip out LZ's again
															
	return vinNum;								// Return formatted data string
  }
  
  /*************************************************************************************************************/
 
 function numLessThanZero(num)				// First Digit less than zero
 { 											// counter fo temp array
		 var i = 0, j = 0, k = 0, g = 0, r = 0, 
		 	v = 0, s = 0, q = 0, n = 0, p = 0;
		 var flag = "";
		 var templen = 0;
		 var numlen;
		 var temp = [];
		 var zeroes = 0;
		 var cells = [[]];
		 var cellscopy = [[]];
		 var cellen = 0;
		 var cellen2 = 0;
		 var cellpos = 0;
		 var cellprop = [[]];
		 var finalnum = [];
		 
		numlen = num.length; 
 									// if we encounter a negative digit, reset the counter k
		do {										
			k = 0, flag = "up", temp = [];
			temp[k] = num[i];
			i++;
			k++;
			do {
				if ((num[i] !== null || num[i] !== undefined) && num[i] >= 0 &&  i < numlen) {
					temp[k] = num[i];
					i++;
					k++;
				}
			} 
			while ((num[i] !== null || num[i] !== undefined) && num[i] >= 0 && i < numlen);
						
			templen = temp.length;    						// find size of temp array
			g = templen - 1;          						// start iteration at end of array; g is the counter
			zeroes = 0;								
															// === equals by type as well as value 
															// Only if last element in cell is zero
			if (temp[g] === 0){
				do {   
					if (temp[g] === 0) 						// Go backwards, adding up all zeroes and
															// destroying all the zeroes simultaneously
								{
									zeroes++;
									temp.splice(-1, 1);		// used temp.shift(); wrong!
									g--;					// splice(-1, 1) removes last element
								}
					} 
				while (temp[g] === 0 && g > 0);				// only while last element is zero
			}
			cells[j] = [];									// create a new cell array...very important!
			cells[j] = temp;								// put contents of temp into newly created cell
			j++;
			if (zeroes !== 0) {
				for (var m = 0; m < zeroes; m++) {			// Recreate new individual cells for each zero destroyed
							cells[j]= [];					// Place a single zero in each cell
							cells[j][0] = 0;				// increase cell counter by one
							j++;
				}
			}													
		} 
		while (i < numlen);									// End: do-while 
		
		cellen = cells.length;    							// cellen is the number of individual cells

		cellscopy = cells.slice();
															// code for transforming individual cells into negative digits
		for (n = 0; n < cellen; n++) 
			{
				cellen2 = cellscopy[n].length;
				
				if (cellscopy[n][0] < 0)   					// if first digit in cell is negative
					{
						cellprop[n] = [];					// have to create individual 1-D arrays even though original cellprop is 2-D
						
						cellneg = 0;
						      								// counter for negative digits
						
															// $cellen2 is the size of individual cell
						for (p = 0; p < cellen2; p++) 
							{
								if (cellscopy[n][p] < 0) 
									{
										cellneg++;			// count the negative digits in each cell
									}
							}	// If all of the digits in the cell are negative
						if (cellneg === cellen2){			// Put all contents of the individual cell into cellprop array
							for (q = 0; q < cellen2; q++) {	// if cells[n][q] exists
								if(cellscopy[n][q])	{
									cellprop[n][q] = cellscopy[n][q];
								}
							}
						} 									// Otherwise, process the digits of the cell using Nikhilam Sutra 
															// "All from 9 last from 10" 
						else {												
							cellprop[n][0] = (cellscopy[n][0]) + 1; 	// put 1st digit into cellprop after adding 1
																		// For the remaining digits in cell, less one, take 9
								for (r = 1; r < cellen2 - 1; r++) {		// For last digit in cell, take 10.	
										if(cellscopy[n][r] !== null || cellscopy[n][r] !== undefined){
											cellprop[n][r] = (cellscopy[n][r]) - 9;
										}
								}
							cellprop[n][cellen2 - 1] = (cellscopy[n][r]) - 10;
						}
					}
					 										// if first digit in cell is zero
				else if (cellscopy[n][0] === 0){
								           					// calculate size of individual cell, $cellen2
					cellprop[n] = [];						// have to create individual 1-D arrays even though original cellprop is 2-D
															// If any cell has zero at the beginning it is in a cell
						for (s = 0; s < cellen2; s++) {		// of its own and ii gets its own cell in the $cellprop array
											cellprop[n][s] = 0;
						}
				}
																			
			}			// end of for loop for building cellprop
		
		var v = 0;
				
		for(n = 0; n < cellen; n++){														
			for(s = 0; s < cellscopy[n].length; s++) {		// $cellprop array into the $finalnum array 
				finalnum[v] = cellprop[n][s];		// 	SORT THIS OUT
				v++;
			}	
		}												
	
								
  		return finalnum;																	
}			


 function numZeroOrMore(num)
 {
 var i = 0;
 var j = 0;							// counter for cells
 var k = 0;							// counter fo temp array
 var g = 0;
 var r = 0;
 var v = 0;
 var s = 0;
 var q = 0;
 var n = 0;
 var p = 0;
 var flag = "";
 var templen = 0;
 var numlen;
 var temp = [];
 var zeroes = 0;
 var cells = [[]];
 var cellscopy = [[]];
 var cellen = 0;
 var cellen2 = 0;
 var cellpos = 0;
 var cellprop = [[]];
 var finalnum = [];
 
 numlen = num.length; 
        										// If 1st digit of vinculum number is positive num[0] > 0
																		// the whole number will be postive.
	do {
		flag = "up";   									// Flag up for 1st digit being positive
		k = 0;
		temp = [];
		temp[k] = num[i];
		i++;
		k++;
			// loop and while the digit is >= 0 then place the digits in the array called temp

		do {
				
				if (num[i] > 0 && (num[i] !== null || num[i] !== undefined) && num[i + 1] > 0) {                                           // If 1st digit is > 0 and 2nd digit > 0 i.e 57, 46, 27, 78 etc.
									
					temp[k] = num[i];					// (case 1)
					i++;
					k++;
				}
						 
				else if (num[i] > 0 && (num[i] !== null || num[i] !== undefined) && (num[i + 1] === null || num[i + 1] === undefined) ){                                           // If 1st digit is > 0 and 2nd digit >= 0 i.e 50, 46, 27, 70 etc.
									
					temp[k] = num[i];					// (case 1b)
					i++;
					k++;
					flag = "down";
				}	                                  // If both adjacent digits are zero i.e 00
				else if (num[i] === 0 && (num[i] !== null || num[i] !== undefined) && num[i + 1] === 0) {											// (case 2)	
					temp[k] = num[i];
					i++;
					k++;
														// If digit is zero or less than zero ie 0, -6,-4, -7 
				} 
				else if (num[i] <= 0 && (num[i] !== null || num[i] !== undefined)) 	{ // do while the digits are negative
					do {									// put flag down when positive digit is encountered
						temp[k] = num[i];			// (case 3)
						i++;							// could have -5-7-9, -3-2-4-7 etc.
						k++;
					} 
					while (num[i] <= 0);
								
				flag = "down";
				} 		
				else if (num[i] >= 0 && (num[i] !== null || num[i] !== undefined) && num[i + 1] <= 0) {											// ie. 00, 0-3, 30, 6-9, 
									
							flag = "down";							// (case 4)
				} 													// if positive number comes after a zero
				else if (num[i] === 0 && (num[i] !== null || num[i] !== undefined) && num[i + 1] > 0) {											// (case 5)
								
							flag = "down";
				}											// i.e. 04, 08, 09
			} 
			while (num[i] >= 0 &&  (num[i] !== null || num[i] !== undefined) && flag != "down" && i < numlen);
								
	
			// For each temp array, let us build the individual cells

			templen = temp.length;    						// find size of temp array
			g = templen - 1;          						// start iteration at end of array; g is the counter
			zeroes = 0;								
																// === equals by type as well as value
																// Only if last element in cell is zero
			if (temp[g] === 0){
				do {   											// destroying all the zeroes simultaneously							
					if (temp[g] === 0) {
						zeroes++;
						temp.splice(-1, 1);				// used temp.shift(); wrong!
						g--;							// splice(-1, 1) removes last element
					}
				} 
				while (temp[g] === 0 && g > 0);					// only while last element is zero
			}
			cells[j] = [];										// create a new cell array...very important!
			cells[j] = temp;									// put contents of temp into newly created cell
			j++;
			if (zeroes !== 0){
				for (var m = 0; m < zeroes; m++) {											// Recreate new individual cells for each zero destroyed
					cells[j]= [];							// Place a single zero in each cell
					cells[j][0] = 0;						// increase cell counter by one
					j++;
				}
			}
		} 
		while (i < numlen);											// Repeat whole loop while digit index i is less than number length
																		
		cellen = cells.length;    									// cellen is the number of individual cells
																		// code for transforming individual cells into negative digit
		
		// Beginning of routine to convert partitioned cells into ordinary positive numbers
		
		
		cellscopy = cells.slice();
		
		for (n = 0; n < cellen; n++) {			// local for loop 1
			cellen2 = cellscopy[n].length;   	
			// if first digit in cell is positive	
			if (cellscopy[n][0] > 0)   {	
				cellprop[n] = [];	// have to create individual 1-D arrays even though original cellprop is 2-D	
				cellpos = 0;       // counter for positive digits
					       			// size of individual cell
					
									// create a clone
							
				for (p = 0; p < cellen2; p++) {
					if (cellscopy[n][p] > 0) {
						cellpos++;
					}
				}
				if (cellpos === cellen2)       // if all digits in cell are positive, no change in entries
					{
						for (q = 0; q < cellen2; q++) {
							cellprop[n][q] = cellscopy[n][q];
						}
				} 				// not all digits in cell are positive
				else if(cellpos !== cellen2) {
					cellprop[n][0] = (cellscopy[n][0] - 1);       // put 1st digit minus 1  into cellprop 
									
					for (r = 1; r < cellen2 - 1; r++) {
						cellprop[n][r] = (cellscopy[n][r]) + 9;
					}
					cellprop[n][cellen2 - 1] = (cellscopy[n][r]) + 10;
				}
			} 					// end of local for loop 1
					// if first digit in cell is zero
			else if (cellscopy[n][0] === 0){
											// cellen2 = cellscopy[n].length;          	 // size of individual cell
						
				cellprop[n] = [];	// have to create individual 1-D arrays even though original cellprop is 2-D
											// For insertion of individual elements
				for (s = 0; s < cellen2; s++) {
									// $cellprop[$n][$s] = $cells[$n][$s];
					cellprop[n][s] = 0;
				}
			}
																		//  var_dump($cellprop);
		}		// end local for loop	1													// http://php.net/manual/en/control-structures.foreach.php
		v = 0;														// v is counter for finalnum
				
		for(n = 0; n < cellen; n++){													 
			for(s = 0; s < cellscopy[n].length; s++) 											// cellprop array into the finalnum array 
															// if(cellprop[n][s] || cellprop[n][s] === 0 || cellprop[n][s] !== null || cellprop[n][s] !== undefined)						// if value exists
				{
					finalnum[v] = cellprop[n][s];					// 	SORT THIS OUT
					v++;
				}
							
		}		
	
	 	return finalnum;			// return Ordinary Number array
	}

       // end of getOrdForm


// Strip 0ut leading zeros from an array

 function leadingZeroStrippa(array) 
 {
      if (array[0] === 0) {
        for (var b = array.length - 1; b > 0; b--) {
          if (array[0] === 0) {
			array.shift();
			} 
		 else {
			b = 0;
            }
        }
      }
     return array;
 }
 
