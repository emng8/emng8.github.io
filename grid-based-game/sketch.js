// Project Title
// Emily Ng
// November 8, 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
// making a game where the bee has to go polinate all the flowers and then has to find its way back to the beehive

let grid;
const GRID_SIZE = 10;
let grassIMG;
let dirtIMG;

function preload() {
  grassIMG = loadImage("grass.png");
  dirtIMG = loadImage("dirt.png");
  flowerIMG = loadImage("flowers.png");
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

}
