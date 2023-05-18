"use strict";

const googleEl = document.getElementById("google");
googleEl.onclick = onGoogleClicked;

function onGoogleClicked() {
  window.open("https://www.google.com");
}

const w3El = document.getElementById("w3");
w3El.onclick = onW3Clicked;

function onW3Clicked() {
  window.open("https://www.w3schools.com/js");
}

const imagesEl = document.getElementById("images");
imagesEl.onclick = onImagesClicked;

function onImagesClicked() {
  window.open("./images.html", "_self");
}
