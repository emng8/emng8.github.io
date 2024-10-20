// Golden Ratio Spiral with Circles
// Emily Ng
// October 21, 2024
//
// Extra for Experts:
// 1. const size = min(windowWidth, windowHeight) - I learned that I can calculate the shortest
// length of either the width or the height to ensure that the canvas is square.
// 2. ColorMode(HSL, 1) - I learned that for my project, I can HSL to change colors based off of hue,
// saturation, and lightness. Using HSL instead of RGB made the art more colorful. It also provides smooth 
// color transitions. 
// 3. cos() and sin() - I used it to draw the circles/spiral. The angle determines the angle of the rotation and the 
// radius represents how far away it is from the origin of the vector. This makes up something called polar coordinates.
// 

function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
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
      
      // makes it a spiral insteas of a circle
      const x = 0.5 + cos(angle * TWO_PI) * dist;
      const y = 0.5 + sin(angle * TWO_PI) * dist;

      const sig = pow(cosn(f - t * 6), 2);
      const r = f * 0.05; // Radius based on the fraction
      const hue = fract(t + f * 0.5);
      const sat = 1;
      const light = 0.6 * sig + 0.25; 

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