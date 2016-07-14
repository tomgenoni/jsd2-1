// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array


	// TODO: concatenate the fixed text with the two random values
	// to create a new startup idea like:
	// A startup that is Apple, but for Trello
	startupIdea = '';


	// Update page with new startup idea
	startup.innerHTML = startupIdea;
}

function saveFavorite() {

	// TODO: add the new idea to the array


}

function printFavorites() {

	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites in the array into one string


	// update favorites with
	list.innerHTML = text;
}


// Init
// ------------------------------------------
generateStartup();

