let smashTokens = 0;

const startBtn = document.getElementById("startBtn");
const welcome = document.getElementById("welcome");
const game = document.getElementById("game");
const tokensUI = document.getElementById("tokens");
const playArea = document.getElementById("playArea");

startBtn.onclick = () => {
  welcome.hidden = true;
  game.hidden = false;
  spawnBug();
};

function spawnBug() {
  const bug = document.createElement("div");
  bug.className = "bug";
  bug.innerText = "👾";

  bug.onclick = () => {
    smashTokens += 1;
    tokensUI.innerText = `🪙 ${smashTokens}`;
    bug.remove();
    spawnBug();
  };

  playArea.appendChild(bug);
}