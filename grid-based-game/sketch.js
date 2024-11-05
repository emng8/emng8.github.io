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
const MUD_TILE = 0; // character can't go on the mud
const GRASS_TILE = 1; // character can go on the grass

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
  displayGrid();
}

function keyPressed() {
  // move up
  if (key === "w") {

  }
  // move left 
  if (key === "a") {

  }
  // move down
  if (key === "s") {

  }
  // move right
  if (key === "d") {

  }
}

function displayGrid() { // * figure out how to actually display the grid
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === MUD_TILE) {
        image(grassImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === GRASS_TILE) {
        image(pathImg, x*cellSize, y*cellSize, cellSize, cellSize);
      }
    }
  }
}