let gameStatus = document.querySelector(".status");
let gameStarted = false;
let currentScore = 0;
let allDirt = document.querySelectorAll(".dirt");
let dirtPositions = [];
let timeOut;
let clicked = false;
let mouse = document.querySelector(".mouse");

let currentScoreElem = document.querySelector(".currentScore");
function handleMouseClick() {
  if (!gameStarted) return;
  if (!clicked) currentScore++;
  clicked = true;
  currentScoreElem.innerText = currentScore;
  timeOut = setTimeout((resolve) => resolve, 0);
}
allDirt.forEach((elem) => {
  dirtPositions.push([elem.offsetTop, elem.offsetLeft]);
});
gameStatus.addEventListener("click", handleStatus);
function handleStatus(e) {
  if (gameStarted) return;
  gameStarted = true;
  currentScoreElem.innerText = currentScore;
  gameStatus.innerText = "Game In Progress!";
  gameStatus.style.background = "purple";
  mouse.style.display = "flex";
  startGame();
}
async function startGame() {
  mouse.addEventListener("click", handleMouseClick);
  let startTime = Date.now();
  while (startTime + 15000 >= Date.now()) {
    clicked = false;
    console.log(startTime + 15000, Date.now());
    let randomNumber = Math.floor(Math.random() * 6);
    console.log(dirtPositions, randomNumber);
    mouse.style.top = `${dirtPositions[randomNumber][0] - 50}px`;
    mouse.style.left = `${dirtPositions[randomNumber][1]}px`;
    await new Promise((resolve) => (timeOut = setTimeout(resolve, 1000)));
  }
  currentScore = 0;
  //   currentScoreElem.inn;
  gameStarted = false;
  gameStatus.innerText = "Start!";
  gameStatus.style.background = "Blue";
  mouse.style.display = "none";
}
