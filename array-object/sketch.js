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

const radius = 0.25;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

  const t = fract(frameCount / 1000); // define t
  const dots = createDots(t);
  renderDots(dots); // draw the dots

}

function createDots(t) {
  const count = 2000 * (1 - cos(t * TWO_PI)); // Adjusted for 2D
  const dots = []; // Array to hold dot objects

  for (let i = 1; i < count; i++) {
      const f = i / count;
      const angle = f * TWO_PI; // 2D angle calculation
      const dist = 0.4 * f; // Adjust distance for better visuals
      
      const x = 0.5 + cos(angle) * dist;
      const y = 0.5 + sin(angle) * dist;

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