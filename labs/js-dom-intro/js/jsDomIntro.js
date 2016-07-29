// Structure
// ------------------------------------------
var form = document.querySelector("body form");


// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
	e.preventDefault();
	console.log('createNewThing');

}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
	console.log('addToList');

}



