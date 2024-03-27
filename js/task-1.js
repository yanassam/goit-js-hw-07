const allСategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${allСategories.length}`);

allСategories.forEach((element) => {
  const category = element.children[0].textContent;
  const elements = element.children[1].children.length;

  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});
