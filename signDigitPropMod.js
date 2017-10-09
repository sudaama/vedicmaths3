// Proper

function SingleDigit(sign, digit) {
    this.sign = sign;
    this.digit = digit;
    this.num = [this.sign, this.digit];
}

SingleDigit.prototype.displayDigits = function() {
  return '{' + this.sign + ', ' + this.digit + '}';
};


// Constructor: build an array of SingleDigit objects 
function ArrayDigits(mixedArr) {
  var digitArr = mixedArr;
  var arr3 = [];      // declare empty array here...better than global
    for(var i = 0; i < digitArr.length/2; i++) { // fill in sign and digit
      var temp = new SingleDigit(digitArr[i * 2], digitArr[i * 2 + 1]);
      arr3.push(temp);
    }
   this.digitArray = arr3;
}


ArrayDigits.prototype.getNum = function() {
  this.numz = []; // for each SingleDigit in the array of SingleDigit objects, get the digit part
  this.signz = []; // for each SingleDigit in the array of SingleDigit objects, get the sign part
  this.numProp = []; // Create an array of signed digits i.e. positive or negative 
  
  //console.log("digitArray length is: " + this.digitArray.length );  // test code 
  for(var i = 0; i < this.digitArray.length; i++){
    this.numz[i] = this.digitArray[i].digit;
    this.signz[i] = this.digitArray[i].sign;
    if(this.signz[i] !== '-') {
      this.numProp[i] = this.numz[i];     // positive number
    }
    else {
      this.numProp[i] = -this.numz[i];  // negative number
    }
  }
  return this.numProp;            // return array of signed digits
};

/*
var crtSingArr = function(formArray) {
  return function() {
    var arr3 = [];      // declare empty array here...better than global
    for(var i = 0; i < formArray.length/2; i++) { // fill in sign and digit
      var temp = new SingleDigit(formArray[i * 2 + 1], formArray[i  * 2 + 2]);
      arr3.push(temp);
    }
    return arr3;    // return arr3 to the function
    };
};
*/

// Bodge to ignore 5 buttons on form....
/*
var crtSingArr = function(formArray) {
  return function() {
    var arr3 = [];      // declare empty array here...better than global
    for(var i = 2; i < formArray.length/2 - 1; i++) { // fill in sign and digit
      var temp = new SingleDigit(formArray[i * 2 + 1 ], formArray[i  * 2 + 2]);
      arr3.push(temp);
    }
    return arr3;    // return arr3 to the function
    };
};
*/

// This works perfectly now, adjusted for exact number of buttons (5 so far)
// If number of buttons changes, the formula will have to change.
var crtSingArr = function(formArray) {
  return function() {
    var arr3 = [];      // declare empty array here...better than global
    for(var i = 0; i < (formArray.length - 5)/2; i++) { // fill in sign and digit
      var temp = new SingleDigit(formArray[i * 2 + 5], formArray[i  * 2 + 6]);
      arr3.push(temp);
    }
    return arr3;    // return arr3 to the function
    };
};


var createSingArray = crtSingArr(document.forms[0]);


/* test data
var digArr = ['+', 9, '-', 7, '+', 3, '-', 5];
var digArr2 = ['+', 6, '-', 8, '+', 4, '-', 7];
var digArr3 = ['-', 8, '-', 1, '+', 9, '-', 5];

var newTing = new ArrayDigits(digArr);
var newTing2 = new ArrayDigits(digArr2);
var newTing3 = new ArrayDigits(digArr3);

console.log(newTing.getNum());
console.log(newTing2.getNum());
console.log(newTing3.getNum());

*/
