const paragraphs = document.getElementsByTagName("p");

Array.from(paragraphs).forEach((element) => {
  element.style.border = "thin solid black";
});

const images = document.getElementsByTagName("img");
Array.from(images).forEach((element) => {
  element.classList.add("roundedImg");
  element.alt = "roundedImg";
});
