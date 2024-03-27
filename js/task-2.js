const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector(".gallery");

// 1 варіант
// images.forEach((element) => {
//   const li = document.createElement("li");
//   li.classList.add("gallery-element");
//   gallery.appendChild(li);
//   const image = document.createElement("img");
//   image.src = element.url;
//   image.alt = element.alt;
//   li.appendChild(image);
// });

// 2 варіант
const galleryItemsHtml = images
  .map(
    (element) => `
  <li class="gallery-element">
    <img src="${element.url}" alt="${element.alt}">
  </li>`
  )
  .join("");

gallery.innerHTML = galleryItemsHtml;
