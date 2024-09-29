// Interactive Scene
// Emily Ng
// October 1, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// rectMode() changes the origin of the rectangle to be the center
// keyTyped()
// keyCODe() 
// UP_ARROW DOWN_ARROW
// changing color of text

// ball characteristics
let ballX;
let ballY;
let ballWidth = 15;
let ballHeight = 15;
let ballSpeed = 2.5;
let ballDirectionX = -1;
let ballDirectionY = -1;

// player 1 paddle
let p1X = 10;
let p1Y = 250;

// player 2 paddle
let p2X = 890;
let p2Y = 250;

// paddle characteristics
let playerWidth = 20;
let playerHeight = 100;
let pSpeed = 2;

// scoreboard
let p1Score = 0;
let p2Score = 0;

// start screen
let stage = 0;

function setup() {
  createCanvas(900, 500);

  // initial ball position
  rectMode(CENTER);
  ballX = width/2;
  ballY = height/2;

  // scoreboard
  textAlign(CENTER);

} // close setup function

function draw() {
  gameStage();
  displayWinner();
} // close draw function

function gameStage() {
  // show start screen
  if (stage === 0) {
    startScreen();  
  }

  // show pong game
  if (stage === 1) {
    pong();
  }

  // starting pong game
  if(mouseIsPressed === true) {
    stage = 1; 
  }
} // close gameStage function

function displayWinner() {
  // screen if player 1 wins
  if(stage === 2) {
    p1Wins();
  }

  // screen if player 2 wins
    if(stage === 3) {
      p2Wins();
    }
} // close displayWinner function

function startScreen() {
  background(169, 232, 182);

  fill(252, 88, 146);
  textSize(80);
  text('WATERMELON', width/2, 190);

  fill(240, 151, 170);
  textSize(60);
  text('PONG GAME', width/2, 270);

  fill(96, 181, 109);
  textSize(40);
  text('click to start', width/2, 350);
} // close startScreen function

function p1Wins() {
  background(169, 232, 182);

  fill(252, 88, 146);
  textSize(80);
  text('PLAYER 1 WINS', width/2, 230);

  fill(240, 151, 170);
  textSize(60);
  text('refresh to try again', width/2, 330);
} // close p1Wins function

function p2Wins() {
  background(169, 232, 182);

  fill(252, 88, 146);
  textSize(80);
  text('PLAYER 2 WINS', width/2, 230);

  fill(240, 151, 170);
  textSize(60);
  text('refresh to try again', width/2, 330);
} // close p2Wins function

function pong() {
  // make wasd and arrow keys work
  keyTyped();
  keyPressed(); 

  // drawing court
  background(240, 151, 170);
  noFill();
  stroke(255);
  rect(width/2, height/2, width, height); 
  line(450, 0, 450, height); 

  // draw ball
  fill(0);
  noStroke();
  rect(ballX, ballY, ballWidth, ballHeight);

  // draw player 1 and player 2 paddles
  fill(131, 247, 135);
  rect(p1X, p1Y, playerWidth, playerHeight);
  rect(p2X, p2Y, playerWidth, playerHeight);

  // making ball move
  ballX = ballX + (ballDirectionX * ballSpeed); 
  ballY = ballY + (ballDirectionY * ballSpeed); 

  // collision with walls
  // if ball hits bottom wall, change direction
  if (ballY >= height) { 
    ballDirectionY = ballDirectionY * (-1); 
  }
  // if ball hits top wall, change direction
  if (ballY <= 0) { 
    ballDirectionY = ballDirectionY * (-1); 
  }

  // collision with paddles
  // if ball hits player 1 paddle, change direction
  if (ballX >= p1X - 10 && ballX <= p1X + 10 && ballY >= p1Y - 50 && ballY <= p1Y + 50) {
    ballDirectionX = ballDirectionX * (-1); 
  } 
  // if ball hits player 2 paddle, change direction
  if (ballX >= p2X - 10 && ballX <= p2X + 10 && ballY >= p2Y - 50 && ballY <= p2Y + 50) { 
    ballDirectionX = ballDirectionX * (-1); 
  } 

  // making scoreboard
  textSize(40);
  text(p1Score, 400, 50);
  text(p2Score, 500, 50);

  // scoring points
  // if player 1 misses, add point for player 2 and reset the ball
  if (ballX <= 0) { 
    p2Score = p2Score + 1; 
    ballX = width/2;
    ballY = height/2;
  }
  // if player 2 misses, add point for player 1 and reset the ball
  if (ballX >= width) { 
    p1Score = p1Score + 1; 
    ballX = width/2;
    ballY = height/2;
  }

  // show screen if player 1 wins
  if (p1Score >= 10) {
    stage = 2;
  }

  // show screen if player 2 wins
  if (p2Score >= 10) {
    stage = 3;
  }
} // close pong function

function keyTyped(){
  if (key === 'w' && keyIsPressed) {
    p1Y = p1Y - pSpeed;
  }
  if (key === 's' && keyIsPressed) {
    p1Y = p1Y + pSpeed;
  }
} // close keyTyped function

function keyPressed() {
  if (keyCode === UP_ARROW && keyIsPressed){
    p2Y = p2Y - pSpeed;
  }

  if (keyCode === DOWN_ARROW && keyIsPressed) {
    p2Y = p2Y + pSpeed;
  }
   } // close keyPressed Function