// // Project Title
// // Emily Ng
// // November 15, 2024
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"
// // making a game where the bee has to go polinate all the flowers and then has to find its way back to the beehive

// setting up grid for game
let grid = [
  [0, 0, 1, 1, 0, 3, 3, 0, 1, 1], 
  [1, 0, 0, 1, 0, 1, 0, 1, 0, 1], 
  [0, 3, 3, 0, 0, 1, 3, 3, 0, 0],
  [0, 1, 1, 1, 1, 1, 3, 1, 1, 0], 
  [0, 1, 1, 0, 0, 1, 0, 0, 3, 3], 
  [0, 0, 3, 0, 0, 3, 0, 1, 0, 1],
  [1, 1, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 1, 0, 0, 3, 3, 1],
  [0, 3, 0, 1, 0, 0, 1, 1, 3, 0],
  [1, 1, 0, 3, 3, 1, 1, 1, 1, 2]
];

const GRID_ROWS = grid.length;
const GRID_COLUMNS = grid[0].length; 
const cellSize = 50;
let grassIMG, dirtIMG, flowerIMG, beeIMG, beehiveIMG, borderIMG;
const DIRT_TILE = 1; // mud tile (blocked tile)
const GRASS_TILE = 0; // grass tile (open tile)
const BEEHIVE_TILE = 2; // beehive tile (special tile)
const FLOWER_TILE = 3; // flower tile (special tile)
let player = {
  x: 0,
  y: 0,
};
let stage = 0;
let flowersCollected = 0; // Track number of collected flowers
const totalFlowers = 17; // Set total number of flowers

function preload() {
  grassIMG = loadImage("grass.png");
  dirtIMG = loadImage("dirt.png");
  flowerIMG = loadImage("flower.png");
  beeIMG = loadImage("bee.png");
  beehiveIMG = loadImage("beehive.png");
  borderIMG = loadIMage("border.png")
}

function setup() {
  createCanvas(500, 500); 
}

function draw() {
  gameStage();
}

function keyPressed() {
  // Move up
  if (key === "w" && player.y > 0 && grid[player.y - 1][player.x] !== DIRT_TILE) {
    player.y--;
  }
  // Move left
  if (key === "a" && player.x > 0 && grid[player.y][player.x - 1] !== DIRT_TILE) {
    player.x--;
  }
  // Move down
  if (key === "s" && player.y < GRID_ROWS - 1 && grid[player.y + 1][player.x] !== DIRT_TILE) {
    player.y++;
  }
  // Move right
  if (key === "d" && player.x < GRID_COLUMNS - 1 && grid[player.y][player.x + 1] !== DIRT_TILE) {
    player.x++;
  }
}

function displayGrid() {
  // Loop through the grid and display tiles
  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLUMNS; x++) {
      if (grid[y][x] === DIRT_TILE) {
        image(dirtIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // DIRT_TILE is 1
      } 
      else if (grid[y][x] === GRASS_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // GRASS_TILE is 0
      } 
      else if (grid[y][x] === BEEHIVE_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // GRASS_TILE is 0
        image(beehiveIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // BEEHIVE_TILE is 2
      }
      else if (grid[y][x] === FLOWER_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // GRASS_TILE is 0
        image(flowerIMG, x * cellSize, y * cellSize, cellSize, cellSize);  // FLOWER_TILE is 3       
      }
    }
  }
}

function polinate() {
  if (grid[player.y][player.x] === FLOWER_TILE) {
    grid[player.y][player.x] = GRASS_TILE;
    flowersCollected++; // Increment the flower counter
}

// Check if all flowers are collected and the bee is on the beehive
  if (flowersCollected === totalFlowers && grid[player.y][player.x] === BEEHIVE_TILE) {
    stage = 2; // Switch to stage 2
  }
}

function displayPlayer() {
  image(beeIMG, player.x * cellSize, player.y * cellSize, cellSize, cellSize); 
}

function startScreen(){
  background(255, 239, 143);
  textSize(40);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 10);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 450);

  textSize(50);
  text('🐝', 100, 305);
  text('🐝', 400, 305);

  fill(250, 185, 7); 
  textSize(60); 
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text('THE SWEET', width / 2, 150);
  text('HONEY DASH', width / 2, 220);

  fill(115, 81, 2);  
  textSize(15);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text('Pollinate all the flowers and reach the beehive to complete the game!', width / 2, 270);
  text('USE WASD TO MOVE THE BEE', width / 2, 320);

  fill(171, 126, 2)
  textSize(30);
  textStyle(BOLD);
  text('CLICK TO START THE GAME', width / 2, 375);  
}

function beeGame(){
  displayGrid();
  displayPlayer();
  polinate();
}

function endScreen(){
  background(255, 239, 143);
  textSize(40);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 10);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 450);

  
}

function gameStage() {
  // show start screen
  if (stage === 0) {
    startScreen();  
  }

  // show game
  if (stage === 1) {
    beeGame();
  }

  // starting game
  if (mouseIsPressed === true) {
    stage = 1; 
  }

  if (stage === 2) {
    endScreen();
  }
}

// function beeGame() {
// 
// }

// function completePolination() {
//   let counter = 0;
//   if (grid != FLOWER_TILE && (player.x && player.y === grid[10][10]))
//   let stage = 
// }