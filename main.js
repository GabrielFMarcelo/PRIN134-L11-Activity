const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;
let currentIndex = 1;
let totalTargets = 0;

function newTarget() {
  const inputElement = document.getElementById("input");
  const inputValue = parseInt(inputElement.value);

  if (score === totalTargets) {
    currentIndex = 1;
    score = 0;
    scoreBoard.textContent = "Score: " + score;
  }

  totalTargets = inputValue;
  gameArea.innerHTML = "";

  for (let i = 1; i <= inputValue; i++) {
    const target = document.createElement("div");
    target.classList.add("target");
    target.textContent = i;
    target.dataset.index = i;

    target.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      const index = parseInt(target.dataset.index);

      if (index === currentIndex) {
        target.remove();
        score++;
        scoreBoard.textContent = "Score: " + score;
        currentIndex++;

        if (score == totalTargets) {
          setTimeout(() => newTarget(), 500);
        }
      }
    });

    gameArea.appendChild(target);
    moveTarget(target);
  }
}

function moveTarget(target) {
  const gameAreaRect = gameArea.getBoundingClientRect();
  const maxX = gameAreaRect.width - target.offsetWidth;
  const maxY = gameAreaRect.height - target.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  target.style.left = `${randomX}px`;
  target.style.top = `${randomY}px`;
}

function resetGame() {
  score = 0;
  currentIndex = 1;
  scoreBoard.textContent = "Score: " + score;
  gameArea.innerHTML = "";
  newTarget();
}

gameArea.addEventListener('contextmenu', function(event) {
  event.preventDefault();
})

document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key.toLowerCase() === "o") {
    resetGame();
    event.preventDefault();
  }
});