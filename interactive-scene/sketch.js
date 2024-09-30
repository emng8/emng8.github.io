// Interactive Scene - Watermelon Pong Game
// Emily Ng
// October 1, 2024
//
// Extra for Experts:
// 1. keyCode() - I used this function so i could use the system variables UP_ARROW, DOWN_ARROW, LEFT_ARROW, and RIGHT_ARROW. This allowed me to use the key codes of special keys. 
// 2. rectMode() - I used this to change the x and y coordinates of my paddles to be in the center. This made it easier for me to align the paddles in the center on both sides. 
// 3. html elements - I used textStyle() and textSize() to customize the text I wanted to display. In doing so, I created an eye catching and engaging game.
// 5. emojis - I discovered that you can put microsoft emojis into text() to display them. This is a new method I learned to show images.

// ball characteristics
let ballX;
let ballY;
let ballWidth = 15;
let ballHeight = 15;
let ballSpeed = 2.5;
let ballDirectionX = -1;
let ballDirectionY = -1;

// player 1 and player 2 paddle characteristics
let p1X = 10;
let p1Y = 250;
let p2X = 890;
let p2Y = 250;
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
}

function draw() {
  // calling functions to play the game
  gameStage();
  displayWinner();
}

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
  if (mouseIsPressed === true) {
    stage = 1; 
  }
}

function displayWinner() {
  // show screen if player 1 wins
  if (stage === 2) {
    p1Wins();
  }

  // show screen if player 2 wins
  if (stage === 3) {
    p2Wins();
  }
}

function startScreen() {
  // start screen text, pictures, and instructions
  background(169, 232, 182);
  textSize(140)
  text('🍉', 100, 450)
  text('🍉', 800, 150)  
  text('🏓', 100, 150)
  text('🏓', 800, 450)

  fill(252, 88, 146);
  textSize(80);
  textStyle(BOLD);
  text('WATERMELON', width/2, 210);

  fill(240, 151, 170);
  textSize(60);
  textStyle(BOLD);
  text('PONG GAME', width/2, 280);

  fill(96, 181, 109);
  textSize(40);
  textStyle(BOLD);
  text('CLICK TO START GAME', width/2, 370);

  fill(96, 181, 109);
  textSize(20);
  textStyle(NORMAL);
  text('(USE WASD AND ARROW KEYS TO PLAY)', width/2, 400);
}

function p1Wins() {
  // screen if player 1 wins
  background(169, 232, 182);

  fill(252, 88, 146);
  textSize(80);
  textStyle(BOLD);
  text('PLAYER 1 WINS', width/2, 230);

  fill(240, 151, 170);
  textSize(60);
  textStyle(BOLD);
  text('REFRESH TO TRY AGAIN', width/2, 330);
}

function p2Wins() {
  // screen if player 2 wins
  background(169, 232, 182);

  fill(252, 88, 146);
  textSize(80);
  textStyle(BOLD);
  text('PLAYER 2 WINS', width/2, 230);

  fill(240, 151, 170);
  textSize(60);
  textStyle(BOLD);
  text('REFRESH TO TRY AGAIN', width/2, 330);
}

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
  ballX += (ballDirectionX * ballSpeed); 
  ballY += (ballDirectionY * ballSpeed); 

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
    p2Score += 1; 
    ballX = width/2;
    ballY = height/2;
  }
  // if player 2 misses, add point for player 1 and reset the ball
  if (ballX >= width) { 
    p1Score += 1; 
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
}

function keyTyped(){
  // controls for player 1
  if (key === 'w' && keyIsPressed) {
    p1Y -= pSpeed;
  }
  if (key === 's' && keyIsPressed) {
    p1Y += pSpeed;
  }
}

function keyPressed() {
  // controls for player 2
  if (keyCode === UP_ARROW && keyIsPressed){
    p2Y -= pSpeed;
  }

  if (keyCode === DOWN_ARROW && keyIsPressed) {
    p2Y += pSpeed;
  }
   }