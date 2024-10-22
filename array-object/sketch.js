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

const shapeRadius = Math.sqrt(0.5); // calculates the radius all the dots of the entire shape covers the whole canvas
const dotSize = 0.1; // starting size of the dots that will be drawn
const PHI = (1 + Math.sqrt(5)) / 2; // calculates the golden ratio
const frames = 1000; // number of frames used for animation purposes

function setup() {
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
  noStroke();
}

function draw() {
  scale(width, height);
  background(0);

  const time = fract(frameCount / 1000); // makes the animation of the drawing loops 
  const dots = createDots(time); 
  renderDots(dots); // draw the dots
}

function createDots(t) {
  const circleNumber = 2000 * invertnormCos(t);  // the number of circles to make 
  const dots = []; // Array to hold dots

  // makes multiple circles in a spiral shape
  for (let i = 1; i < circleNumber; i++) {
    const fraction = i / circleNumber; // number of circles that appear on either side
    const angle = i * PHI; // makes it so that there are multiple spirals

    // makes the multiple circles be in a semi-spiral shape
    const distance = fraction * shapeRadius; // calculates the distance from the center for each dot, scaling it by fraction to ensure dots spread out until the shapeRadius as i increases.
    const x = 0.5 + cos(angle * TWO_PI) * distance; // makes the x be 
    const y = 0.5 + sin(angle * TWO_PI) * distance; // makes the y be in a spiral

    // animates the circles size 
    const signal = pow(normCos(fraction - t * 6), 2); // adds the pulsing effect while influencing the z=size of the circles
    const circleRadius = fraction * 0.05; // makes less circles on the inside than outside
      
    // changes the color of the drawing 
    const hue = t + fraction * 0.5; // changes the color over time
    const sat = 1;
    const light = 0.6 * signal + 0.25; // animates the lightness using sig

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

// Makes a normalized cosine function between 0 and 1 based on the cosine function to create a full cosine wave.
function normCos(value) {
  return cos(value * TWO_PI) * 0.5 + 0.5;
}

// Returns the inverse of the normCos. As normCos(value) goes from 0 to 1, invertnormCos(value) goes from 1 to 0, creating a smooth animation effect.
function invertnormCos(value) {
  return 1 - normCos(value);
}

function renderDots(dots) {
  dots.forEach(dot => {
      fill(dot.color);
      circle(dot.x, dot.y, dot.radius);
  });
}