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

let x;
let y; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  translate(200, 200);

  // fix this 
  circle(100, 100, 100);
  circle(200, 200, 50);
  circle(100, 350, 200);
  rect(100, 100, 100, 200);
  rect(300, 300, 100, 200);
}

function drawCircles() {
  let x = cos(frameCount) * 100;
  let y = sin(frameCount) * 100;

  ellipse(x, y, 20, 20);
}

// trying to make the illusion everywhere 
function multipleCircles(x, y) {
  let theRect = {
    // moving to new position 
    newX: x + 100,
    newY: y + 100,
  }; 
}

// think I have to use this loop to make multiple. with the list. 

function duplicate(vertical, horizontal) {
  for (figure in drawing) {
    let theDrawing = {
      vertical: vertical + 200,
      horizontal: horizontal + 200, 
    };
  }
}