// Grid-Based Game - The Sweet Honey Dash
// Emily Ng
// November 15, 2024
// 
// Extra for Experts:
// 1. createImg('confetti.gif') - The function loads the confetti GIF file into the game as an HTML image element.
// 2. confettiGIF.size() & confettiGIF.position() - I used this to alter the position of the GIF.
// 3. confettiGIF.show() & confettiGIF.hide() - I had to use these functions because GIFS are not static like regular images, meaning that these functions are necessary to control its visability.
// 4. loadSound('music.mp3') - I used this to preload the music. I then used music.loop() to start playing the music.
// 5. musicPlayed = true & musicPlayer = true - I had to use this to  ensures that the music does not accidentally restart every time the frame updates.
// 6. music.amp() - I used this to change the sound of my background music so that the sound effect would be loud enough. 

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
const GRASS_TILE = 0; 
const DIRT_TILE = 1;
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

// variable for GIF
let confettiGIF;

// variable for music and sound effects
let music;
let musicPlayed = false;
let soundEffect;
let completeGame;

function preload() {
  // preload for images
  grassIMG = loadImage("grass.png");
  dirtIMG = loadImage("dirt.png");
  flowerIMG = loadImage("flower.png");
  beeIMG = loadImage("bee.png");
  beehiveIMG = loadImage("beehive.png");

  // preload for GIFS
  confettiGIF = createImg('confetti.gif');
  confettiGIF.hide(); 

  // preload for music and sound effects
  music = loadSound('music.mp3');
  soundEffect = loadSound('soundEffect.mp3');
  completeGame = loadSound('completeGame.mp3');
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

  // plays music looped
  if (stage === 0 && !musicPlayed) {
    music.amp(0.7);
    music.loop(); 
    musicPlayed = true;
  }

  // show game
  if (stage === 1) {
    beeGame();
  }

  // starting game
  if (mouseIsPressed === true) {
    stage = 1; 
  }

  // ending game with sound effect
  if (stage === 2) {
    endScreen();
    completeGame.play();
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
  // end screen text and pictures
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
  // move up
  if (key === "w" && player.y > 0 && grid[player.y - 1][player.x] !== DIRT_TILE) {
    player.y--;
    soundEffect.play();
  }

  // move left
  if (key === "a" && player.x > 0 && grid[player.y][player.x - 1] !== DIRT_TILE) {
    player.x--;
    soundEffect.play();
  }

  // move down
  if (key === "s" && player.y < GRID_ROWS - 1 && grid[player.y + 1][player.x] !== DIRT_TILE) {
    player.y++;
    soundEffect.play();
  }

  // move right
  if (key === "d" && player.x < GRID_COLUMNS - 1 && grid[player.y][player.x + 1] !== DIRT_TILE) {
    player.x++;
    soundEffect.play();
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
    // if true, switches to end screen
    stage = 2;
  }
}