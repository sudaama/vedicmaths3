
function SingleDigit(sign, digit) {
    this.sign = sign;
    this.digit = digit;
    this.num = [this.sign, this.digit];
}

SingleDigit.prototype.displayDigits = function() {
  return '{' + this.sign + ', ' + this.digit + '}';
};

// Constructor: build an array of SingleDigit objects 
// Original routine made for simple array with pair-wise elements
function ArrayDigits(mixedArrInput){
    var digitArr = mixedArrInput;
    
    var arr3 = [];      // below is formula for stepping thru 'sign-digit' pairs after 
                        // taking buttons into consideration 
    for(var i = 0; i < (digitArr.length - amntButts)/2; i++) { // fill in sign and digit
      var temp = new SingleDigit(digitArr[i * 2 + amntButts], digitArr[i  * 2 + amntButts + 1]);
      arr3.push(temp);
    }
    this.digitArray = arr3;    // this.digitArray gets value of arr3 
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

// This works perfectly now, adjusted for exact number of buttons (5 so far)
// If number of buttons changes, the formula will have to change.
var crtSingArr = function(formArray) {
  return function() {
   // var amntButts = 6;  // number of buttons in form (made Global now)
    var arr3 = [];      // below is formula for stepping thru 'sign-digit' pairs after 
                        // taking buttons into consideration 
    for(var i = 0; i < (formArray.length - amntButts)/2; i++) { // fill in sign and digit
      var temp = new SingleDigit(formArray[i * 2 + amntButts], formArray[i  * 2 + amntButts + 1]);
      arr3.push(temp);
    }
    return arr3;    // return arr3, array of SingleDigits to the function expression variable crtSingArr
    };
};

var createSingArray = crtSingArr(document.forms[0]);
