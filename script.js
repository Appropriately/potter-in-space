/*
  Sean Lewis
  Arguably some of the worst code I have written - code quality and also its pretty
  dumb. Swaps between random backgrounds and images, manipulating the image using its
  top and left position, allowing it to move across the webpage.
*/

// Used to keep track of how many times the image has been moved
var iterations = 0;

var width;
var height;

// Array of different backgrounds
var backgrounds = [
    "url(backgrounds/wallpaper.jpg)", "url(backgrounds/wallpaper1.jpg)",
    "url(backgrounds/img.jpg)", "url(backgrounds/test.jpg)"
];

// Array of different images
var elises = [
  "elise.png", "elise1.png", "elise2.png", "nice.png"
];

// First function to be run, gives a delay so that the splash screen can be displayed
// for a short period of time. Then hides some elements, and begins the fade in.
function setup() {
  setTimeout(function(){
    $( ".overlay" ).fadeOut("slow");
    var elise = document.getElementById("elise");
    elise.style.display = "none";
    document.getElementById("background").style.display = "none";
    setTimeout(function(){begin(elise, width, height)},10);
  }, 3000);
} // setup

function begin(elise,width,height) {
  document.getElementById("background").style.backgroundImage
    = backgrounds[Math.floor(Math.random()*backgrounds.length)];
  $( "#background" ).fadeIn("slow", function() {
    setTimeout(function(){randomSetup(elise, width, height)},10);
  });
} // begin


function randomSetup(elise, width, height) {
  elise.src = elises[Math.floor(Math.random()*elises.length)];

  var randomX, randomY, posX, posY;
  iterations = 0;
  height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  // Generate random position, it can't be too close to the edge of the page
  posY = elise.style.top = (height/2) + (Math.random() * (height/10) - height/5);
  posX = elise.style.left = (width/2) + (Math.random() * (width/10) - width/5);

  // Set a random size
  var size = (2 + Math.random() * 5);
  var sizeDifference = -0.025 + Math.random() * 0.05;
  elise.style.width = size + "vw";

  // Generate some values
  randomX = -2 + (Math.random() * 4);
  randomY = -2 + (Math.random() * 4);

  $( "#elise" ).fadeIn("slow", false);

  // Do the movement
  setTimeout(function(){movement(elise, posX, posY,randomX,randomY,size,sizeDifference)}, 50);
} // randomSetup

// A function that generates a random background
function randomBackground() {

} // randomBackground

// The function is passed values and then moves by those appropriate values
function movement(elise,x,y,ranX,ranY,size,sizeDifference) {
  if (iterations < 200) {
    elise.style.top  = (y+(iterations*ranY)) + 'px';
    elise.style.left = (x+(iterations*ranX)) + 'px';
    elise.style.width = size + sizeDifference + "vw";
    iterations++;
    setTimeout(function(){movement(elise, x, y,ranX,ranY,size+sizeDifference,sizeDifference)}, 50);
  } else {
    $( "#background" ).fadeOut("slow", false);
    $( "#elise" ).fadeOut("slow", function() {
      setTimeout(function(){begin(elise, width, height)},10);
    });
  } // if/else
} // movement
