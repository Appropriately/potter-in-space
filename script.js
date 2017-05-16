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
  posY = elise.style.top = (height/2) + (Math.random() * (height/10) - height/5);
  posX = elise.style.left = (width/2) + (Math.random() * (width/10) - width/5);

  elise.style.height = (2 + Math.random() * 15) + "vh";

  // Generate some values
  randomX = generateNumber();
  randomY = generateNumber();

  $( "#elise" ).fadeIn("slow", false);
  //fadeIn(elise);

  // Do the movement
  setTimeout(function(){movement(elise, posX, posY,randomX,randomY)}, 50);
} // setup

function fadeIn(element) {
  element.style.opacity = 0;
  while(element.style.opacity < 0.9) element.style.opacity += 0.01;
} // fadeIn

function fadeOut(element) {
  element.style.opacity = 1;
  while(element.style.opacity > 0) element.style.opacity -= 0.01;
} // fadeOut


// The function is passed values and then moves by those appropriate values
function movement(elise,x,y,ranX,ranY) {
  if (iterations < 200) {
    elise.style.top  = (y+(iterations*ranY)) + 'px';
    elise.style.left = (x+(iterations*ranX)) + 'px';
    iterations++;
    setTimeout(function(){movement(elise, x, y,ranX,ranY)}, 50);
  } else {
    //fadeOut(elise);
    $( "#elise" ).fadeOut("slow", function() {
      setTimeout(function(){setup(elise, width, height)},10);
    });
  } // if/else
} // movement

function generateNumber() {
  return -2 + (Math.random() * 4);
} // generateNumber
