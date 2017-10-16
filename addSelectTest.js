/* numGen generates an array of digits, 0 through 9 inclusive
*  addSelectFunk function takes a single parameter, id, the location of where the signed digits will be formed
*  the function uses each of the digits generated using numGen and individually wraps them in option tags, 
*  all enclosed in select tags.
*  removeSelectFunk removes the last child in the parent element.   
*
*/
window.onload = addSelectFunk, removeSelectFunk;

var numGen = function ()  {
    var num, numArray = new Array(), index;
       
    for(index = 0; index < 10; index++) {
        numArray[index] = index;
    }
    
    return numArray;
};

//var buttonId = "butt";                          // Identity of Add Digit Button 
//var readOut = "multiplicand";                   // Identity of first child first form multiplicanFrm
// var buttR = "buttRemove";                       // Identity of Remove Digit Button


// Essentially, this function displays the individual digit....using a closure, returning a function
// digitReadout is where display will be output
var addSelectFunk = function(digitReadOut) {
    return function() {         // Create a closure so we can use in addEventListener...function (2)
        var newDiv = document.createElement('div');
        var butElem = document.getElementById(digitReadOut);         // readOut is id of Input section
        // var butElem = document.getElementById("testId");         // readOut is id of Input section
        newDiv.className = "next2each rounded";
        var html = '<select class="num rounded" name="digit[]">'; 
        var num = numGen();
        for(var i = 0; i < num.length; i++) {
            html += "<option value='" + num[i] + "'" + "id=" + '"' + num[i] + '"' + ">" + num[i] + "</option>";
        }
        html += '</select>';

        // An array called sign will be created containing the individual digit signs  
        var html2 = '<select  class="sign rounded" name="sign[]">';
        html2 += "<option value='" + '' + "'>" + '+' + "</option>" + "<option value='" + '-' + "'>" + '-' + "</option>";
        html2 += '</select>';
            
        // Concatenate the html statements
        html = html2 + html;
            
        // Place the html into the newly created div called newDiv 
        newDiv.innerHTML= html;

        
        butElem.appendChild(newDiv);                                // test1
    };                                                              // end of function (2)
};                                                                  // end od addSelectFunk


var removeSelectFunk = function(divname) {                          // create a closure...remove a digit.
    return function() {
        var getparentDiv = document.getElementById(divname);
        getparentDiv.removeChild( getparentDiv.lastChild );

    };
};

// Remove the last element in the global array

