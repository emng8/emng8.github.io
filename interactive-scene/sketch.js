// Interactive Scene
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// rectMode() changes the origin of the rectangle to be the center
// 

// global variables
var ballX;
var ballY;
var ballWidth = 15;
var ballHeight = 15;

function setup() {
  createCanvas(900, 500);

  // initial ball position
  rectMode(CENTER);
  ballX = width/2;
  ballY = height/2;


} // close setup function

function draw() {
  background(218, 244, 245)

  // draw ball
  fill(255);
  nostroke();
  rect(ballX, ballY, ballWidth, ballHeight)

} // close draw function
