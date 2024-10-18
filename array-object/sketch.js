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

// let x;
// let y; 

let x = 0;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  movingBall();
}

function movingBall() {
  x = x + speed; 
	 if (x > width) {
    speed *= -1;
  }
  if (x === 0) {
    speed *= -1 ;
  }
  ellipse(x, 0, 20, 20);
  ellipse(x, 30, 20, 20);
  ellipse(x, 60, 20, 20);
  ellipse(x, 90, 20, 20);
  ellipse(x, 120, 20, 20);
  ellipse(x, 150, 20, 20);
  ellipse(x, 180, 20, 20);
  ellipse(x, 210, 20, 20);
  ellipse(x, 240, 20, 20);
  ellipse(x, 270, 20, 20);
  ellipse(x, 300, 20, 20);
  ellipse(x, 330, 20, 20);
  ellipse(x, 360, 20, 20);
  ellipse(x, 390, 20, 20);
}


// function drawCircles() {
//   let x = cos(frameCount) * 100;
//   let y = sin(frameCount) * 100;

//   ellipse(x, y, 20, 20);
// }

// trying to make the illusion everywhere 
// function multipleCircles(x, y) {
//   let theRect = {
//     // moving to new position 
//     newX: x + 100,
//     newY: y + 100,
//   }; 
// }

// think I have to use this loop to make multiple. with the list. 

// function duplicate(vertical, horizontal) {
//   for (figure in drawing) {
//     let theDrawing = {
//       vertical: vertical + 200,
//       horizontal: horizontal + 200, 
//     };
//   }
// }