"use strict";
let imageFiles = [
  { name: "images/cute_cat.jpg", description: "A cute cat" },
  { name: "images/cute_dog.jpg", description: "A cute dog" },
  { name: "images/flower.jpg", description: "A pretty flower" },
  { name: "images/storm.jpg", description: "A storm" },
  { name: "images/sunrise.jpg", description: "A sunrise" },
];

// const addBtnEl = document.getElementById("addBtn");
// const clearBtnEl = document.getElementById("clearBtn");
// const pictureSelectEl = document.getElementById("pictureSelect");
// addBtnEl.onclick = onAddBtnClicked;
// clearBtnEl.onclick = onClearBtnClicked;
// pictureDropdown();

// function pictureDropdown() {
//   for (let i = 0; i < imageFiles.length; i++) {
//     let optionEl = document.createElement("option");
//     optionEl.textContent = imageFiles[i].description;

//     pictureSelectEl.appendChild(optionEl);
//   }
// }

// const displayPictureDiv = document.getElementById("imgOutput");

// function onAddBtnClicked() {
//   let img = document.createElement("img");
//   let selectedPicture = pictureSelectEl.value;
//   for (let i = 0; i < imageFiles.length; i++) {
//     if (selectedPicture == imageFiles[i].description) {
//       img.src = imageFiles[i].name;
//       displayPictureDiv.appendChild(img);
//     }
//   }
// }

// function onClearBtnClicked() {}

//this is the way they showed in class

const insertedImagePaths = [];

const addBtnEl = document.getElementById("addBtn");
const clearBtnEl = document.getElementById("clearBtn");
const pictureSelectEl = document.getElementById("pictureSelect");
const displayPictureDiv = document.getElementById("imgOutput");

for (let i = 0; i < imageFiles.length; i++) {
  const optionEl = document.createElement("option");
  optionEl.textContent = imageFiles[i].description;
  optionEl.value = imageFiles[i].name;
  pictureSelectEl.appendChild(optionEl);
}

addBtnEl.addEventListener("click", () => {
  const selectedImageValue = pictureSelectEl.value;

  if (selectedImageValue === "") {
    alert("Nothing selected");
  }
  if (insertedImagePaths.includes(selectedImageValue)) {
    return;
  }

  insertedImagePaths.push(selectedImageValue);
  const selectedImageObj = imageFiles.find(
    (img) => img.name == selectedImageValue
  );

  const imgEl = document.createElement("img");
  imgEl.src = selectedImageObj.name;
  imgEl.alt = selectedImageObj.description;
  displayPictureDiv.appendChild(imgEl);
});
clearBtnEl.addEventListener("click", () => {
  const images = displayPictureDiv.querySelectorAll("img");
  insertedImagePaths.length = 0;
  Array.from(images).forEach((img) => {
    displayPictureDiv.removeChild(img);
  });
});
