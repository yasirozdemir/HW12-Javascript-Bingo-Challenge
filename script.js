function randomizeNumber() {
  return (randomNumber = Math.floor(Math.random() * 76) + 1);
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

function createNewPlayers(playerId) {
  let newPlayersContainer = document.getElementById("newPlayersContainer");

  let newPlayerArea = document.createElement("div"); // new div created to add new player boards
  newPlayerArea.classList.add("newPlayerArea"); // class added to style the new div
  newPlayersContainer.appendChild(newPlayerArea); // appended to the main container

  let newCellsForNewPlayer = randomizeArrayForNewPlayers(); // using the function an array is created for the new cells

  let title = document.createElement("h2");
  title.innerText = `Player ${playerId}`;
  newPlayerArea.appendChild(title);

  for (let i = 0; i < 24; i++) {
    // for loop to create new cells using the randomized array

    let newCell = document.createElement("div");
    newCell.innerText = newCellsForNewPlayer[i];
    newCell.classList.add("cells");
    newPlayerArea.appendChild(newCell);
  }
}

function onClickTriggerCreateNewPlayers() {
  let inputNodeValue = document.getElementById("user-board_input").value; // reading the value taken from user (number of new players)

  for (let i = 1; i <= inputNodeValue; i++) {
    createNewPlayers(i); // FIXME: Titles (ex. Player 1) are only correct when first pressed button
  }
}

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
