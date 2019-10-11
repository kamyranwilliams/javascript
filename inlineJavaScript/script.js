// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
//6-8 is the function we are using but in order to use it we must define the function
function makeOpaque(elem){
	elem.classList.add("opaque");
}

function turnColor(elem){
	elem.classList.remove("light_grey")
	elem.classList.add("orange")
	//essentially I just started toggling
}

function toggleOpaque(elem){

}

function myFunction(elem){
 var element = document.getElementById("mybox");
 	 element.classList.toggle("mystyle");
	// rename this function so it's name is describes what it does!
	// then add your own code here!
}

/*When a box is clicked make it turn orange.
When a box is clicked make it add the opaque class if it’s not already there and remove the opaque class if it is already there (this is called toggling!)
When a box is clicked make it disappear completely from the page.
When a box is clicked make it turn green (HINT: what does the word “cascade” mean?)
When a box is clicked change its height to 100%.
When a box is clicked make it turn the background color of the <body> to black.
When a box is clicked make text appear inside.
When a box is clicked make an image appear anywhere on the screen.
Create your own functionality!*/


// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility