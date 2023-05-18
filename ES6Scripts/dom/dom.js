"use strict";

window.onload;

const images = document.getElementsByClassName("imageGroup");
console.log(images);

// let imageDiv = images.length;
// for (let i = 0; i < imageDiv; i++) {
//   images[i].style.border = "2px solid red";
// }

Array.from(images).forEach((element) => {
  element.style.border = "2px solid red";
});

const notP = document.querySelectorAll(":not(p)");
Array.from(notP).forEach((element) => {
  element.style.border = "2px solid blue";
});
const notA = document.querySelectorAll("p:not([class])");
Array.from(notA).forEach((element) => {
  element.style.border = "2px solid black";
});
const notDivWithId = document.querySelectorAll("div:not([id]) ");
Array.from(notA).forEach((element) => {
  element.style.border = "2px solid yellow";
});
