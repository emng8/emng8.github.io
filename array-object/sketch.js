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
// // 4. const - I used this to define a constant. After I declared it as a constant, it can not be reassigned. I had
// to use this instead of let because if I used let, it would change everytime. 
// 5. FrameCount()
// 6. PHI and TWO_PI

function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
  noStroke();
}

// these two functions make it so that the drawing gets bigger and then smaller
// normalized cos so that we can us a value from 0-1
function normCos(v) {
  return cos(v * TWO_PI) * 0.5 + 0.5;
}
// makes it go from 0 to 1 and back to 0. makes a curve to animate things with
function invertnormCos(v) {
  return 1 - normCos(v);
}

const shapeRadius = Math.sqrt(0.5); // makes it so that the entire shape covers the whole screen
const dotSize = 0.1;
const PHI = (1 + Math.sqrt(5)) / 2; // the most irrational number
const frames = 1000;

function draw() {
  scale(width, height);
  background(0);
  fill(1);

  const time = fract(frameCount / 1000); // makes it so that the sketch loops 
  const dots = createDots(time);
  renderDots(dots); // draw the dots

}

function createDots(t) {
  const circleNumber = 2000 * invertnormCos(t); 
  const dots = []; // Array to hold dot objects

  // makes multiple circles in a spiral shape
  for (let i = 1; i < circleNumber; i++) {
      const fraction = i / circleNumber;
      const angle = i * PHI; 
      // makes the multiple circles be in a spiral shape
      const distance = fraction * shapeRadius;
      const x = 0.5 + cos(angle * TWO_PI) * distance; // multiplied by TWO_PI so a full cycle is 1
      const y = 0.5 + sin(angle * TWO_PI) * distance;

      // animates the circles size 
      const sig = pow(normCos(fraction - t * 6), 2);
      const circleRadius = fraction * 0.05; // makes it so that there ar eless circles on the inside than outside
      
      // changes the color of the drawing 
      const hue = t + fraction * 0.5; // changes the color over time
      const sat = 1;
      const light = 0.6 * sig + 0.25; // animates the lightness using sig

      const dot = {
          x: x,
          y: y,
          radius: circleRadius,
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