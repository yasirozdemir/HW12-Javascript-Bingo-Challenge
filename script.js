// GLOBAL VARIABLES AND ELEMENTS

//-------------------------------------

// function randomizeNumber() {
//   let arrayOfNumbers = [];
//   for (let i = 1; i <= 76; i++) {
//     arrayOfNumbers.push(i);
//   }

//   var copy = arrayOfNumbers.slice(0);

//   return function () {
//     if (copy.length < 1) {
//       copy = arrayOfNumbers.slice(0);
//     }
//     var index = Math.floor(Math.random() * copy.length);
//     var item = copy[index];
//     copy.splice(index, 1);
//     console.log(item);
//   };
// }

function randomizeNumber() {
  return (randomNumber = Math.floor(Math.random() * 77));
}

function randomizeBackgroundColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return [r, g, b];
}

function randomizeArrayForNewPlayers() {
  //to be able to create a new player, we created a new array which have 24 random elements

  var i = arrayOfNumbers.length;
  j = 0;
  let temp;

  while (i--) {
    j = Math.floor(Math.random() * (i + 1));
    arrayOfNumbers[i] = arrayOfNumbers[j];
    arrayOfNumbers[j] = temp;
  }

  let arrayOf24 = [];
  for (let i = 0; i < 24; i++) {
    arrayOf24[i] = arrayOfNumbers[i];
  }
  console.log(arrayOf24);
}

function selectCellRespectToRandomNumber() {
  let randomNumber = randomizeNumber();
  let randomBackgroundColor = randomizeBackgroundColor();

  let allCells = document.querySelectorAll(".cells");

  for (let cell of allCells) {
    if (randomNumber === parseInt(cell.innerText)) {
      console.log(cell);
      console.log(randomBackgroundColor);
      cell.style.backgroundColor = `rgb(${randomBackgroundColor})`;
    }
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
