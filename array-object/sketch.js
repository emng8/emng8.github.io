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

function cosn(v) {
  return cos(v * TWO_PI) * 0.5 + 0.5;
}

function invCosn(v) {
  return 1 - cosn(v);
}

const radius = Math.sqrt(0.5);
const dotSize = 0.1;
const PHI = (1 + Math.sqrt(5)) / 2;
const frames = 1000;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

  const t = fract(frameCount / 1000); // define t
  const dots = createDots(t);
  renderDots(dots); // draw the dots

}

function createDots(t) {
  const count = 2000 * invCosn(t); 
  const dots = []; // Array to hold dot objects



  for (let i = 1; i < count; i++) {
      const f = i / count;
      const angle = i * PHI; 
      const dist = f * radius;
      
      
      const x = 0.5 + cos(angle * TWO_PI) * dist;
      const y = 0.5 + sin(angle * TWO_PI) * dist;

      const r = f * 0.05; // Radius based on the fraction
      const hue = fract(t + f * 0.5);
      const sat = 1;
      const light = 0.6; 

      const dot = {
          x: x,
          y: y,
          radius: r,
          color: color(hue, sat, light)
      };

      dots.push(dot); 
  }

  return dots; 
}

function renderDots(dots) {
  dots.forEach(dot => {
      fill(dot.color);
      circle(dot.x, dot.y, dot.radius);
  });
}