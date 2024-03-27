const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

function changeName() {
  const withoutSpace = input.value.trim();
  if (withoutSpace) {
    output.textContent = withoutSpace;
  } else {
    output.textContent = "Anonymous";
  }
}

input.addEventListener("input", changeName);
