// Structure
// ----------------------------
var p = document.querySelector("body p");
var ul = document.querySelector(".concepts");


// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

// setup ajax request
var jqxhr = $.getJSON(url, handleData);

// callback function for ajax request
// ajax callbacks expect the json data


function handleData(json) {
	console.log(json);

	var description = json['description'];

	p.textContent = description;

	json["_embedded"]["concepts"].forEach(createConcept);

}


function createConcept(item) {
	var li = document.createElement("li");
	li.textContent = item["description"]
	ul.appendChild(li);
}
