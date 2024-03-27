const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

function changeName() {
  const withoutSpace = input.value.trim();
  if (withoutSpace) {
    output.textContent = withoutSpace;
  } else {
    output.textContent = "Anonymous";
  }
}

input.addEventListener("input", changeName);
