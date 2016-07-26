// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var error     = document.querySelector('main .error');
var locations = document.querySelector('main .locations');


// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
function clickButton(event) {
	console.log('getLocation', event);

	navigator.geolocation.getCurrentPosition(geoSuccess, geoError, options);
}


// Geolocation callback functions
// ------------------------------------------
function geoSuccess(position) {
	console.log('geoSuccess', position);
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	createItem(latitude, longitude);
};

function geoError(positionError) {
	console.log('geoError', positionError);
	error.innerHTML = 
	"Error: Unable to retrieve your location. " + "<br>" +
	positionError.code + 
	": " + 
	positionError.message;
}


// Update page functions
// ------------------------------------------
function createItem(latitude, longitude) {
	var li = document.createElement('li');
	li.innerHTML = latitude + ", " + longitude;
	locations.appendChild(li);
}
