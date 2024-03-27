function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const output = document.querySelector(".color");

function changeColorBody() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  output.textContent = newColor;
}

changeColorBtn.addEventListener("click", changeColorBody);
