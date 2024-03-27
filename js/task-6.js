function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxes = document.getElementById("boxes");
const amountDiv = document.querySelector("#controls input");
const amount = +amountDiv.value;

function createBoxes(amount) {
  boxes.innerHTML = "";

  let size = 30;
  if (amount <= 100)
    for (let i = 0; i < amount; i++) {
      const div = document.createElement("div");
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(div);
      size += 10;
    }
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", () => {
  boxes.innerHTML = "";
  amountDiv.value = "";
});
