const content = document.querySelector(".content");

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const stepX = [];
const stepO = [];

let player = "X";

function createMarkup() {
  let markup = "";
  for (let i = 1; i <= 9; i += 1) {
    markup += `<div class="item" data-id="${i}"></div>`;
  }
  content.innerHTML = markup;
}

createMarkup();

content.addEventListener("click", onClick);

function onClick(evt) {
  if (!evt.target.classList.contains("item")) {
    return;
  }
  if (evt.target.textContent) {
    return;
  }

  const currentId = Number(evt.target.dataset.id);

  let result = false;

  if (player === "X") {
    stepX.push(currentId);
    result = isWinner(stepX);
  } else {
    stepO.push(currentId);
    result = isWinner(stepO);
  }

  evt.target.textContent = player;

  if (result) {
    champion(player);
  }

  player = player === "X" ? "O" : "X";
}

function champion(player) {
  setTimeout(() => {
    alert(`Player   ${player}   you are Winner! Congratulation!`);
    createMarkup();
  }, 300);
}

function isWinner(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}
