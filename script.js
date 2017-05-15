var iterations = 0;
var elise = document.getElementById("elise");

var width;
var height;

var backgrounds = [
    "url(backgrounds/wallpaper.jpg)", "url(backgrounds/wallpaper1.jpg)",
    "url(backgrounds/image.png)", "url(backgrounds/test.jpg)"
];



function magic() {
  setup(elise, width, height);
} // magic

function setup(elise, width, height) {
  var randomValue = Math.floor(Math.random()*backgrounds.length);
  document.body.style.backgroundImage = backgrounds[randomValue];

  var randomX, randomY, posX, posY;
  iterations = 0;
  height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  // Generate random position
  posY = elise.style.top = Math.random() * height;
  posX = elise.style.left = Math.random() * width;

  // Generate some values
  randomX = generateNumber();
  randomY = generateNumber();

  // Do the movement
  setTimeout(function(){movement(elise, posX, posY,randomX,randomY)}, 50);
} // setup

// The function is passed values and then moves by those appropriate values
function movement(elise,x,y,ranX,ranY) {
  if (iterations < 200) {
    elise.style.top  = (y+(iterations*ranY)) + 'px';
    elise.style.left = (x+(iterations*ranX)) + 'px';
    console.log(iterations);
    iterations++;
    setTimeout(function(){movement(elise, x, y,ranX,ranY)}, 50);
  } else {
    setTimeout(function(){setup(elise, width, height)},10);
  } // if/else
} // movement

function generateNumber() {
  return -2 + (Math.random() * 4);
} // generateNumber
