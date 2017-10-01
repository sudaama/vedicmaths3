
var freshFrmId = [1, 2, 3, 4, 5]; // create Id of numbers
var freshNumArray = [1, 2, 3, 4];		// this represents a typical array of signed digits 
var freshNumId = [1, 2, 3, 4];

var addFreshNumber = addFreshNum(freshFrmId[0], freshNumId[0], freshNumArray);

var getButtId = document.getElementById("buttFresh");
getButtId.addEventListener("click", addFreshNumber);


var removeFreshNumber = removeFreshNum(freshNumId);	// use the id of the container div and remove last child

var getButtIdRemove = document.getElementById("buttRemoveFresh");
getButtIdRemove.addEventListener("click", removeFreshNumber); 		// use the function variable 
