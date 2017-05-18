var iterations = 0;

var width;
var height;

var backgrounds = [
    "url(backgrounds/wallpaper.jpg)", "url(backgrounds/wallpaper1.jpg)",
    "url(backgrounds/img.jpg)", "url(backgrounds/test.jpg)"
];

var elises = [
  "elise.png", "elise1.png", "elise2.png"
];

function setup() {
  setTimeout(function(){ magic(); }, 3000);
} // setup

// Function that fades the opening of the site and begins the loop
function magic() {
  $( ".overlay" ).fadeOut("slow");
  var elise = document.getElementById("elise");
  $( "#elise" ).fadeOut("fast", false);
  $( "#background" ).fadeOut("fast", false);
  setTimeout(function(){begin(elise, width, height)},10);
} // magic

function begin(elise,width,height) {
  randomBackground();
  $( "#background" ).fadeIn("slow", function() {
    setTimeout(function(){randomSetup(elise, width, height)},10);
  });
} // begin


function randomSetup(elise, width, height) {
  // Do some randomizing

  randomElise(elise);

  var randomX, randomY, posX, posY;
  iterations = 0;
  height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  // Generate random position
  posY = elise.style.top = (height/2) + (Math.random() * (height/10) - height/5);
  posX = elise.style.left = (width/2) + (Math.random() * (width/10) - width/5);

  // Set a random size
  elise.style.height = (10 + Math.random() * 10) + "vh";

  // Generate some values
  randomX = generateNumber();
  randomY = generateNumber();

  $( "#elise" ).fadeIn("slow", false);

  //fadeIn(elise);

  // Do the movement
  setTimeout(function(){movement(elise, posX, posY,randomX,randomY)}, 50);
} // randomSetup

// A function that generates a random background
function randomBackground() {
  var randomValue = Math.floor(Math.random()*backgrounds.length);
  document.getElementById("background").style.backgroundImage = backgrounds[randomValue];
} // randomBackground

function randomElise(elise) {
  var randomValue = Math.floor(Math.random()*elises.length);
  elise.src = elises[randomValue];
}

// The function is passed values and then moves by those appropriate values
function movement(elise,x,y,ranX,ranY) {
  if (iterations < 200) {
    elise.style.top  = (y+(iterations*ranY)) + 'px';
    elise.style.left = (x+(iterations*ranX)) + 'px';
    iterations++;
    setTimeout(function(){movement(elise, x, y,ranX,ranY)}, 50);
  } else {
    //fadeOut(elise);
    $( "#background" ).fadeOut("slow", false);
    $( "#elise" ).fadeOut("slow", function() {
      setTimeout(function(){begin(elise, width, height)},10);
    });
  } // if/else
} // movement

function generateNumber() {
  return -2 + (Math.random() * 4);
} // generateNumber
