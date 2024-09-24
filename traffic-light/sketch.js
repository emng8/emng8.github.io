// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis

let isRed = false
let isYellow = false
let isGreen = false
let lastSwitchtime = 0
let redTime = 2000


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  if (millis() > lastSwitchtime + redTime)
    isRed = !isRed
  ellipse(width/2, height/2 - 65, 50, 50); //top 
  isYellow = !isYellow
  ellipse(width/2, height/2, 50, 50); //middle
  isGreen = !isGreen
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
