// Golden Ratio Spiral with Circles
// Emily Ng
// October 21, 2024
//
// Extra for Experts:
// 1. const size = min(windowWidth, windowHeight) - I learned that I can calculate the shortest length of either the width or the height to ensure that the canvas is square.
// 2. ColorMode(HSL, 1) - I learned that for my project, I can HSL to change colors based off of hue, saturation, and lightness. Using HSL instead of RGB made the art more colorful. It also provides smooth color transitions. 
// 3. cos() and sin() - I used it to draw the circles/spiral. The angle determines the angle of the rotation and the radius represents how far away it is from the origin of the vector. This makes up something called polar coordinates.
// 4. const - I used this to define a constant. After I declared it as a constant, it can not be reassigned. I had to use this instead of let because if I used let, it would change everytime. 
// 5. FrameCount() - I used this to track the number of frames drawn since the sketch started.I used this to create the animation with a loop.
// 6. TWO_PI - I used this to convert angles from a normalized range (0 to 1) to radians. It essentially helps to create the spiral pattern.
// 7. PHI - I used this to make the angle increase by the value of the golden ratio after each iteration. This distributes the circles for a balanced look while making the spiral pattern. 

// calculates the golden ratio
const PHI = (1 + Math.sqrt(5)) / 2;

// calculates the radius so all the circles in the entire shape covers the whole canvas
const shapeRadius = Math.sqrt(0.5); 

function setup() {
  // makes canvas the biggest square possible
  const size = min(windowWidth, windowHeight);
  createCanvas(size, size);
  colorMode(HSL, 1);
  noStroke();
}

function draw() {
  // sets scale of drawing and background to be black
  scale(width, height);
  background(0);

  // loops the animation of the drawing
  const time = fract(frameCount / 1000); 
  const dots = createDots(time); 

  // draws animated dots  
  renderDots(dots); 
}

// Makes a normalized cosine function between 0 and 1 based on the cosine function to create a full cosine wave.
function normCos(value) {
  return cos(value * TWO_PI) * 0.5 + 0.5;
}

// Returns the inverse of the normCos. As normCos(value) goes from 0 to 1, invertnormCos(value) goes from 1 to 0.
function invertnormCos(value) {
  return 1 - normCos(value);
}

function createDots(t) {
  // the number of circles to make 
  const circleNumber = 2000 * invertnormCos(t); 

  // Array to hold each circle 
  const dots = []; 

  // makes multiple circles in a spiral shape
  for (let i = 1; i < circleNumber; i++) {

    // number of circles that appear on either side of drawing
    const fraction = i / circleNumber; 

    // makes it so that there are multiple lines leading to the spirals
    const angle = i * PHI; 

    // Determines the x, y, and distance from the center for the circle
    const distance = fraction * shapeRadius; // calculates the distance from the center for each dot so they spread out
    const x = 0.5 + cos(angle * TWO_PI) * distance;
    const y = 0.5 + sin(angle * TWO_PI) * distance; 

    // animates the circles size 
    const signal = pow(normCos(fraction - t * 6), 2); // creates pulsing effect while changing the size of the circles
    const circleRadius = fraction * 0.05; // makes less circles on the inside than outside
      
    // changes the color of the drawing based of the hue, saturation, and light
    const hue = t + fraction * 0.5; 
    const sat = 1;
    const light = 0.6 * signal + 0.25; 

    // stores information for each individual circle 
    const dot = {
      x: x,
      y: y,
      radius: circleRadius,
      color: color(hue, sat, light)
    };

    // puts each individual circle into the circles array
    dots.push(dot); 
  }

  return dots; 
}

// displays and creates animation for each circle in the circles array 
function renderDots(dots) {
  dots.forEach(dot => {
    fill(dot.color);
    circle(dot.x, dot.y, dot.radius);
  });
}