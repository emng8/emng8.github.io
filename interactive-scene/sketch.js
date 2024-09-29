// Interactive Scene
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// rectMode() changes the origin of the rectangle to be the center
// keyTyped()
// keyCODe() 
// UP_ARROW DOWN_ARROW

// ball characteristics
let ballX;
let ballY;
let ballWidth = 15;
let ballHeight = 15;
let ballSpeed = 2;
let ballDirectionX = -1;
let ballDirectionY = -1;

// player 1 
let p1X = 10;
let p1Y = 250;

// player 2
let p2X = 890;
let p2Y = 250;

// paddle characteristics
let playerWidth = 20;
let playerHeight = 100;
let pSpeed = 2;

function setup() {
  createCanvas(900, 500);

  // initial ball position
  rectMode(CENTER);
  ballX = width/2;
  ballY = height/2;


} // close setup function

function draw() {
  // calling functions
  keyTyped(); // looping keyTyped function
  keyPressed(); // looping keyPressed function

  // draw court
  background(240, 151, 170)
  noFill();
  stroke(255)
  rect(width/2, height/2, width, height); // outer border
  line(450, 0, 450, height) // center line

  // draw ball
  fill(0);
  noStroke();
  rect(ballX, ballY, ballWidth, ballHeight)

  // draw player 1 and player 2 paddles
  fill(131, 247, 135)
  rect(p1X, p1Y, playerWidth, playerHeight)
  rect(p2X, p2Y, playerWidth, playerHeight)

  // making ball move
  ballX = ballX + (ballDirectionX * ballSpeed); // move horizontally
  ballY = ballY + (ballDirectionY *ballSpeed); // move vertically

  // collision with walls
  if(ballY >= height) { // hit bottom wall
    ballDirectionY = ballDirectionY * (-1); // change direction
  }

  if(ballY <= 0) { // hit top wall
    ballDirectionY = ballDirectionY * (-1); // change direction
  }

  // collision with paddles
  if (ballX >= p1X - 10 && ballX <= p1X + 10 && ballY >= p1Y - 50 && ballY <= p1Y + 50) { // hit player 1
    ballDirectionX = ballDirectionX * (-1); // change direction 
  } 

  if (ballX >= p2X - 10 && ballX <= p2X + 10 && ballY >= p2Y - 50 && ballY <= p2Y + 50) { // hit player 2
    ballDirectionX = ballDirectionX * (-1); // change direction 
  } 


} // close draw function

function keyTyped(){
  if (key === 'w' && keyIsPressed) {
    p1Y = p1Y - pSpeed;
  }
  if(key === 's' && keyIsPressed) {
    p1Y = p1Y + pSpeed;
  }
} // close keyTyped function

function keyPressed() {
  if (keyCode === UP_ARROW && keyIsPressed){
    p2Y = p2Y - pSpeed;
  }

  if(keyCode === DOWN_ARROW && keyIsPressed) {
    p2Y = p2Y + pSpeed;
  }

   } // close keyPressed Function
