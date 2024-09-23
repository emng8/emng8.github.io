// Image Demo
// September 23, 2024

let princess; 
function preload() {
  princess = loadImage("princess.jpg")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(princess, mouseX, mouseY, princess.width * 0.5, princess.height * 0.5)
}
