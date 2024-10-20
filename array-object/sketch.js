// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Project Idea: make some sort of optical illusion or repetition art. probably the square optical illusion or trinangle pattern. 
// might make it 3D so it shows it from all angles using 3D rendering. 

function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(RGB, 1);
  noStroke();
}

const radius = 0.25;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

  const count = 100;
  for (let i = 0; i < count; i++) {
    const f = i / count;
    const a = i / PI;
    const dist = f * radius;
    const x = 0.5 + cos(a * TWO_PI) * dist;
    const y = 0.5 + sin(a * TWO_PI) * dist;
    circle(x, y, r);
  }
}