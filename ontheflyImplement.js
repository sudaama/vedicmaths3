
var createFreshNumId = "freshId_1";
var freshNumArray = [1, 2, 3, 4];		// this represents a typical array of signed digits 

var addFreshNumber = addFreshNum(createFreshNumId, freshNumArray);

var getButtId = document.getElementById("buttFresh");
getButtId.addEventListener("click", addFreshNumber);


var removeFreshNumber = removeFreshNum(createFreshNumId);	// use the id of the container div and remove last child

var getButtIdRemove = document.getElementById("buttRemoveFresh");
getButtIdRemove.addEventListener("click", removeFreshNumber); 		// use the function variable 
