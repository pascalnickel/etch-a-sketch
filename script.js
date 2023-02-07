const grid = document.querySelector(".grid");
const resetDrawingButton = document.querySelector(".button__reset-drawing");
const resetGridButton = document.querySelector(".button__reset-grid");

const setGrid = function (gridSize) {
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
  if (gridSize < 48) {
    grid.classList.remove("grid--small");
  } else {
    grid.classList.add("grid--small");
  }

  for (let i = 0; i < gridSize ** 2; i++) {
    let gridItem = document.createElement("div");
    gridItem.classList.add("grid__item");
    gridItem.addEventListener("mouseenter", function () {
      gridItem.classList.add("grid__item--flipped");
    });

    if (gridSize > 48) gridItem.classList.add("grid__item--small");

    grid.appendChild(gridItem);
  }
};

const resetGrid = function () {
  let gridSize;

  while (true) {
    gridSize = parseInt(
      prompt("Enter the grid size. The grid size should be between 16 and 64.")
    );
    if (gridSize >= 16 && gridSize <= 64) break;
    if (gridSize < 16) alert("Grid size is too small.");
    if (gridSize > 64) alert("Grid size is too large.");
  }
  grid.innerHTML = "";
  setGrid(gridSize);
};

const resetDrawing = function () {
  const flippedItems = document.querySelectorAll(".grid__item--flipped");
  flippedItems.forEach((flippedItem) => {
    flippedItem.classList.remove("grid__item--flipped");
  });
};

setGrid(32);

resetDrawingButton.addEventListener("click", resetDrawing);
resetGridButton.addEventListener("click", resetGrid);
