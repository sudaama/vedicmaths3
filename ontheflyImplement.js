
// we have now randomly created form and number ids within onthefly.js


var freshNumArray = [1, 2, 3, 4];		// this represents a typical array of signed digits 
var multNumId = "multNumId";			// id of the multi number container 		

var addFreshNumber = addFreshNum(freshNumArray, multNumId);

var getButtId = document.getElementById("buttFresh");
getButtId.addEventListener("click", addFreshNumber);


var removeFreshNumber = removeFreshNum(multNumId);	// use the id of the container div and remove last child

var getButtIdRemove = document.getElementById("buttRemoveFresh");
getButtIdRemove.addEventListener("click", removeFreshNumber); 		// use the function variable 
