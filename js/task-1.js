const allСategories = document.querySelectorAll("li.item");
console.log(`Number of categories: ${allСategories.length}`);

const categoriesAndElemens = document.querySelectorAll(".item");

categoriesAndElemens.forEach((element) => {
  console.log(`Categories: ${element.querySelector("h2").innerText}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
