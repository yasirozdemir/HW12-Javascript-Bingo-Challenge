// GLOBAL VARIABLES AND ELEMENTS

//-------------------------------------

function randomizeNumber() {
  return (randomNumber = Math.floor(Math.random() * 77));
}

function randomizeBackgroundColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return [r, g, b];
}

function selectCellRespectToRandomNumber() {
  let randomNumber = randomizeNumber();
  let randomBackgroundColor = randomizeBackgroundColor();

  let allCells = document.querySelectorAll(".cells");

  for (let cell of allCells) {
    if (randomNumber === parseInt(cell.innerText)) {
      cell.style.backgroundColor = `rgb(${randomBackgroundColor})`;
    }
  }
}

function randomizeArrayForNewPlayers() {
  //to be able to create a new player, we created a new array which have 24 random elements

  let numbersArray = [];
  for (let i = 1; i <= 76; i++) {
    numbersArray.push(i);
  }

  var i = numbersArray.length;
  j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1)); // used math floor to round the number because math random return float
    temp = numbersArray[i];
    numbersArray[i] = numbersArray[j];
    numbersArray[j] = temp;
  }

  let arrayOf24 = [];
  for (let i = 0; i < 24; i++) {
    arrayOf24[i] = numbersArray[i];
  }
  return arrayOf24;
}

// function createNewPlayers() {
//   let inputNodeValue = document.getElementById("user-board_input").value;
//   let mainContainer = document.getElementById("main-container");

//   let newPlayerContainer = document.createElement("div");
//   newPlayerContainer.classList.add("newPlayerArea");
//   newPlayerContainer.appendChild(mainContainer);
// }

function createCells() {
  let cellContainer = document.getElementById("cellContainer");
  for (let i = 1; i <= 76; i++) {
    let cell = document.createElement("div");
    cell.innerText = i;
    cell.classList.add("cells");
    cellContainer.appendChild(cell);
  }
}

function onLoadActions() {
  createCells();
}

window.onload = onLoadActions;
