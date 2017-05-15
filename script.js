var iterations = 0;

function magic() {
  var elise = document.getElementById("elise");

  var width = window.innerWidth
  || document.documentElement.clientWidth
  || document.body.clientWidth;

  var height = window.innerHeight
  || document.documentElement.clientHeight
  || document.body.clientHeight;

  setup(elise, width, height);
  setInterval(function(){setup(elise, width, height)},10000);
} // magic

function setup(elise, width, height) {
  var randomX, randomY, posX, posY;
  iterations = 0;

  // Generate random position
  posY = elise.style.top = Math.random() * height;
  posX = elise.style.left = Math.random() * width;

  // Generate some values
  randomX = Math.random() * 2;
  randomY = Math.random() * 2;

  // Do the movement
  setInterval(function(){movement(elise, posX, posY,randomX,randomY)}, 200);
} // setup

// The function is passed values and then moves by those appropriate values
function movement(elise,x,y,ranX,ranY) {
  elise.style.top  = (y+(iterations*ranY)) + 'px';
  elise.style.left = (x+(iterations*ranX)) + 'px';
  console.log(iterations);
  iterations++;
} // movement
