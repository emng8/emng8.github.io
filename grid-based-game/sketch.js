// // Project Title
// // Emily Ng
// // November 15, 2024
// //
// // Extra for Experts:
// // - describe what you did to take this project "above and beyond"
// // making a game where the bee has to go polinate all the flowers and then has to find its way back to the beehive

// grid characteristics
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
const DIRT_TILE = 1; 
const GRASS_TILE = 0; 
const BEEHIVE_TILE = 2; 
const FLOWER_TILE = 3; 

// player characteristics
let player = {
  x: 0,
  y: 0,
};

// start screen 
let stage = 0;

// tracking flowers for game
let flowersCollected = 0; 
const totalFlowers = 17; 

// variable for gif
let confettiGIF;

function preload() {
  grassIMG = loadImage("grass.png");
  dirtIMG = loadImage("dirt.png");
  flowerIMG = loadImage("flower.png");
  beeIMG = loadImage("bee.png");
  beehiveIMG = loadImage("beehive.png");
  confettiGIF = createImg('confetti.gif');  // Make sure the path to your confetti GIF is correct
  confettiGIF.hide(); 
}

function setup() {
  createCanvas(500, 500); 
}

function draw() {
  // calling function to play game
  gameStage();
}

function displayPlayer() {
  // displays bee character
  image(beeIMG, player.x * cellSize, player.y * cellSize, cellSize, cellSize); 
}

function beeGame(){
  // calls functions to make the game run
  displayGrid();
  displayPlayer();
  polinate();
}

function gameStage() {
  // show start screen
  if (stage === 0) {
    confettiGIF.hide();
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

function startScreen(){
  // start screen text, pictures, and instructions
  background(255, 239, 143);
  textSize(40);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 10);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 450);

  textSize(50);
  text('🐝', 100, 295);
  text('🐝', 400, 295);

  fill(250, 185, 7); 
  textSize(60); 
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text('THE SWEET', 250, 140);
  text('HONEY DASH', 250, 210);

  fill(115, 81, 2);  
  textSize(15);
  textStyle(BOLD);
  textAlign(CENTER, TOP);
  text('Pollinate all the flowers and reach the beehive to complete the game!', width / 2, 260);
  text('USE WASD TO MOVE THE BEE', 250, 310);

  fill(171, 126, 2)
  textSize(30);
  textStyle(BOLD);
  text('CLICK TO START THE GAME', 250, 365);  
}

function endScreen(){
  // end screen text if the bee collects all the flowers and is at the beehive
  confettiGIF.size(500, 500);
  confettiGIF.position(width / 2 - confettiGIF.width / 2, height / 2 - confettiGIF.height / 2);
  confettiGIF.show();

  background(255, 239, 143);
  textSize(40);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 10);
  text('🍯🍯🍯🍯🍯🍯🍯🍯🍯', 250, 450);

  fill(255, 161, 211);
  textSize(30);
  textStyle(BOLD);
  text('🎉🐝 CONGRATULATIONS 🐝🎉', 250, 90);

  fill(115, 81, 2);
  textSize(18);
  text('You have worked hard, buzzing from flower to flower,', 250, 150);
  text('bringing life to the garden and ensuring that', 250, 180);
  text('the sweetest of all treats, honey, will flow', 250, 210);
  text('for all the bees in the hive! 🌸', 250, 240);

  fill(180, 169, 252);
  textSize(16);
  text('Thanks to your diligent pollination, the hive is now ready', 250, 290);
  text('for its next big adventure. Your efforts have made the', 250, 320);
  text('world bloom brighter and sweeter!', 250, 350);

  fill(255, 161, 211);
  textSize(30);
  textStyle(BOLD);
  text('REFRESH TO PLAY AGAIN', 250, 390);
}

function keyPressed() {
  // controls for the bee

  // move up
  if (key === "w" && player.y > 0 && grid[player.y - 1][player.x] !== DIRT_TILE) {
    player.y--;
  }

  // move left
  if (key === "a" && player.x > 0 && grid[player.y][player.x - 1] !== DIRT_TILE) {
    player.x--;
  }

  // move down
  if (key === "s" && player.y < GRID_ROWS - 1 && grid[player.y + 1][player.x] !== DIRT_TILE) {
    player.y++;
  }

  // move right
  if (key === "d" && player.x < GRID_COLUMNS - 1 && grid[player.y][player.x + 1] !== DIRT_TILE) {
    player.x++;
  }
}

function displayGrid() {
  // loop through the grid to display the proper tiles, flowers, and the beehive
  for (let y = 0; y < GRID_ROWS; y++) {
    for (let x = 0; x < GRID_COLUMNS; x++) {

      // displays dirt tile
      if (grid[y][x] === DIRT_TILE) {
        image(dirtIMG, x * cellSize, y * cellSize, cellSize, cellSize);
      } 

      // displays grass tile
      else if (grid[y][x] === GRASS_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);
      } 

      // displays grass tile with beehive on top
      else if (grid[y][x] === BEEHIVE_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);
        image(beehiveIMG, x * cellSize, y * cellSize, cellSize, cellSize);
      }

      // displays grass tile with flower on top
      else if (grid[y][x] === FLOWER_TILE) {
        image(grassIMG, x * cellSize, y * cellSize, cellSize, cellSize);
        image(flowerIMG, x * cellSize, y * cellSize, cellSize, cellSize);
      }
    }
  }
}

function polinate() {
  // removes the flower on the tile if the bee passes over it
  if (grid[player.y][player.x] === FLOWER_TILE) {
    grid[player.y][player.x] = GRASS_TILE;
    flowersCollected++;
  }

  // checks if all flowers are collected and the bee is on the beehive
  if (flowersCollected === totalFlowers && grid[player.y][player.x] === BEEHIVE_TILE) {
    stage = 2;
  }
}