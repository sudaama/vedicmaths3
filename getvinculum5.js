/*
 * This function just converts a string negative to a number negative (unary negative)
 * Change name from getvinculum!
 * 
 */

function getvinculum(numstr) {
	var str = numstr, i = 0, j = 0, num = [];
				
	if(str.length == 1) {
				num[0] = parseInt(str.charAt(0));
	}
	else if(str.length > 1){ // loop cleans up input and uses unary operator
		do {
			if(str.charAt(i) == '-') {
				num[j] = -parseInt(str.charAt(i+1));
				i++;
			}
			else {
				num[j] = parseInt(str.charAt(i));
			}
			j++;
			i++;
		}
		while(i < str.length)
	}

	num = leadingZeroStrippa(num);	// Make sure to strip out all the zeros
	return num;
}

/*
This function is the functional expression version of getvinculum declared above.
*/
var getvinculumFunk =  function (numstr) {
	var str = numstr, i = 0, j = 0, num = [];
				
	if(str.length == 1) {
				num[0] = parseInt(str.charAt(0));
	}
	else if(str.length > 1){ // loop cleans up input and uses unary operator
		do {
			if(str.charAt(i) == '-') {
				num[j] = -parseInt(str.charAt(i+1));
				i++;
			}
			else {
				num[j] = parseInt(str.charAt(i));
			}
			j++;
			i++;
		}
		while( i < str.length)
	}

	num = leadingZeroStrippa(num);	// Make sure to strip out all the zeros
	return num;
};
 