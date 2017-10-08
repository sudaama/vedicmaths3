// Function to create an array of signed digits 
// Constructor for the SingleDigit grouping

function SingleDigit(sign, digit) {
	this.sign = sign;
  	this.digit = digit;
  	this.num = [this.sign, this.digit];
}

var crtSingArr = function(formArray) {
	return function() {
		var arr3 = [];			// declare empty array here...better than global
		for(var i = 0; i < formArray.length/2; i++) { // fill in sign and digit
			var temp = new SingleDigit(formArray[i * 2], formArray[i * 2 + 1]);
			arr3.push(temp);
		}
		return arr3;		// return arr3 to the function
  	};
};

var createSingArray = crtSingArr(document.forms[0]);


