console.log("Test");

const grid = document.querySelector(".grid");

for (let i = 0; i < 256; i++) {
  let gridItem = document.createElement("div");
  gridItem.classList.add("grid__item");
  gridItem.classList.add(`grid__item--${i}`);
  grid.appendChild(gridItem);
}
