function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");
const divEl = document.querySelector("#boxes");

buttonCreateEl.addEventListener("click", onClickButton);

buttonDestroyEl.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const boxesArray = [];
  for (let i = 0; i < amount; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + 10 * i + "px";
    boxEl.style.height = 30 + 10 * i + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxesArray.push(boxEl);
  }

  return boxesArray;
}

function onClickButton() {
  let createBoxesEl = createBoxes(inputEl.value);
  divEl.append(...createBoxesEl);
}

function destroyBoxes() {
  divEl.innerHTML = "";
}
