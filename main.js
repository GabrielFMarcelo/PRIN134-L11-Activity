const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('scoreBoard');

let score = 0;
const array = [];

function newTarget() {
  const inputElement = document.getElementById("input");
  const inputValue = inputElement.value;
  gameArea.innerHTML = "";

  for (let i = 0; i < inputValue; i++) {
    const target = document.createElement("div");
    target.classList.add("target")
    target.textContent = i;

    target.addEventListener('contextmenu', function(event) {
      event.preventDefault();
      score++;
      scoreBoard.textContent = "Score: " + score;
      moveTarget(target);
      return false;
    });
    gameArea.appendChild(target);
    moveTarget(target);
    array.push(i[0])
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


document.addEventListener("keydown", function(event) {
  if (event.ctrlKey && event.key.toLowerCase() === "o") {
    score = 0;
    scoreBoard.textContent = "Score: " + score;
    event.preventDefault();
  }
});