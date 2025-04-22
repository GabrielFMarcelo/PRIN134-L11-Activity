const gameArea = document.getElementById('gameArea');
const target = document.getElementById('target');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;

function moveTarget() {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - target.offsetWidth;
  const maxY = gameAreaRect.height - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

target.addEventListener('contextmenu', function(event) {
  event.preventDefault();
  score++;
  scoreBoard.textContent = "Score: " + score;
  moveTarget();
  return false;
});

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key.toLowerCase() === "o") {
    score = 0;
    scoreBoard.textContent = "Score: " + score;
    event.preventDefault();
  }
});

// Initial target position
moveTarget();