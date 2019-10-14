// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList // JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
//6-8 is the function we are using but in order to use it we must define the function
function makeOpaque(elem) {
	elem.classList.add("opaque");
}

function turnColor(elem){
	elem.classList.remove("light-grey")
	elem.classList.add("orange")
	//essentially I just started toggling
}

function toggleOpaque(elem){
elem.classList.toggle("opaque")
}

/*function gone(elem){
	elem.classList.display="none"
}*/

function turnGreen(elem){
	elem.classList.remove("yellow")
	elem.classList.add("green")
	//essentially I just started toggling
}

function longbox(elem){
elem.style.height = '100%'
}

function makeDark(elem){
document.body.style.backgroundColor = "#191D1E"
}

function showMessage(elem){
document.getElementById("text").innerHTML = "Ahaha ahahaha..."
}




/*

When a box is clicked make it disappear completely from the page.<need help>


When a box is clicked make an image appear anywhere on the screen.
Create your own functionality!*/


// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility