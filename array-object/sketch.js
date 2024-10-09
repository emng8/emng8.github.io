// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Project Idea: make some sort of optical illusion or repetition art. probably the square optical illusion or trinangle pattern. 
// might make it 3D so it shows it from all angles using 3D rendering. 

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

// function draw() {
//   background(220);
// }

function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(200, 200);

  let x = cos(frameCount) * 100;
  let y = sin(frameCount) * 100;

  ellipse(x, y, 20, 20);
}