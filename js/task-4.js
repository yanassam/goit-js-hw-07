const form = document.querySelector(".login-form");

function infoSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const login = form.elements.email.value;
  const password = form.elements.password.value;

  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {};

  for (const element of this.elements) {
    if (element.name) {
      formData[element.name] = element.value.trim();
    }
  }
  console.log(formData);
  form.reset();
}

form.addEventListener("submit", infoSubmit);
