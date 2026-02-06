Objects are objects
Maths are objects
Dates are objects
Arrays are objects
Maps are objects
Sets are objects
RegExp are Objects
Errors are Objects


-------------------------------------------------
JavaScript Initializations are Not Hoisted
JavaScript only hoists declarations, not initializations.

Example 1 does not give the same result as Example 2:

Example 1
var x = 5; // Initialize x
var y = 7; // Initialize y

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // Display x and y
Example 2
var x = 5; // Initialize x

elem = document.getElementById("demo"); // Find an element
elem.innerHTML = x + " " + y;           // 5  undefined

var y = 7; // Initialize y