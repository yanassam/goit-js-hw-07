function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const output = document.querySelector(".color");

function changeColorBody() {
  document.body.style.backgroundColor = getRandomHexColor();
  output.textContent = getRandomHexColor();
}

changeColorBtn.addEventListener("click", changeColorBody);
