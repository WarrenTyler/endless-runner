import assetLoader from "./assetLoader.js";

/** @type {HTMLCanvasElement} */
const canvas = document.querySelector("canvas");
/** @type {CanvasRenderingContext2D} */
const ctx = canvas.getContext("2d");

const title = "Endless Runner";
document.title = title;

const player = {};
const ground = [];
const platformWidth = 32;
const platformHeight = canvas.height - platformWidth * 4;

// Test canvas
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.fill();

const imageAssets = {
  bg: "images/bg.png",
  sky: "images/sky.png",
  backdrop: "images/backdrop.png",
  backdrop2: "images/backdrop_ground.png",
  grass: "images/grass.png",
  avatar_normal: "images/normal_walk.png",
};

assetLoader.downloadAll(imageAssets);
assetLoader.finished = startGame;

function startGame() {
  ctx.drawImage(assetLoader.imgs.bg, 0, 0);
}

function animate() {
  // ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  // scrollingBackgrounds.forEach((background) => {
  //   background.update();
  //   background.draw();
  // });

  // worldX += scrollSpeed;
  // if (worldX < 0) worldX = worldEnd;
  // if (worldX > worldEnd) worldX = 0;
  // displayWorldX.textContent = worldX;

  requestAnimationFrame(animate);
}
