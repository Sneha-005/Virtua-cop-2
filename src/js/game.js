const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
  x: canvas.width / 2,
  y: canvas.height - 60,
  width: 50,
  height: 50,
  color: "red",
  speed: 5,
  dx: 0,
  dz: 0,
};

// Load background image
const backgroundImage = new Image();
backgroundImage.src = "../images/virtua1[1].png"; // Replace with the path to your background image

let backgroundX = 0;
let backgroundY = 0;
let backgroundScale = 1;

// Function to draw the background
function drawBackground() {
  const scaledWidth = canvas.width * backgroundScale;
  const scaledHeight = canvas.height * backgroundScale;
  const offsetX = (scaledWidth - canvas.width) / 2;
  const offsetY = (scaledHeight - canvas.height) / 2;

  ctx.drawImage(
    backgroundImage,
    backgroundX - offsetX,
    backgroundY - offsetY,
    scaledWidth,
    scaledHeight
  );
}

// Function to draw the player
function drawPlayer() {
  ctx.fillStyle = player.color;
  ctx.fillRect(
    player.x - player.width / 2,
    player.y - player.height / 2,
    player.width,
    player.height
  );
}

// Function to move the player
function movePlayer() {
  backgroundX -= player.dx * 0.5;
  backgroundY -= player.dz * 0.5;
  backgroundScale += player.dz * 0.01;

  // Prevent background scale from becoming too small or too large
  if (backgroundScale < 1) backgroundScale = 1;
  if (backgroundScale > 2) backgroundScale = 2;
}

// Event listeners for keyboard controls
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    player.dx = player.speed;
  } else if (event.key === "ArrowLeft") {
    player.dx = -player.speed;
  } else if (event.key === "ArrowUp") {
    player.dz = player.speed;
  } else if (event.key === "ArrowDown") {
    player.dz = -player.speed;
  }
});

document.addEventListener("keyup", (event) => {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    player.dx = 0;
  } else if (event.key === "ArrowUp" || event.key === "ArrowDown") {
    player.dz = 0;
  }
});

// Game loop
function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBackground();
  drawPlayer();
  movePlayer();
  requestAnimationFrame(gameLoop);
}

// Initial call to start the game loop
gameLoop();
