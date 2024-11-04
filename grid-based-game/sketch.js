// Project Title
// Emily Ng
// November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// making a game where the bee has to go polinate all the flowers and then has to find its way back to the beehive

let grid;
const GRID_SIZE = 50;
const cellSize = 5;
let grassIMG;
let dirtIMG;
let flowerIMG;
let beeIMG; 
let beehiveIMG;

function preload() {
  grassIMG = loadImage("grass.png");
  dirtIMG = loadImage("dirt.png");
  flowerIMG = loadImage("flower.png");
  beeIMG = loadImage("bee.png");
  beehiveIMG = loadImage("beehive.png");
}

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowHeight);    
  }
  else {
    createCanvas(windowHeight, windowHeight);    
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
}

function draw() {
  background(220);
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}
