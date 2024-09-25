//* Selectors
const gridContainer = document.getElementById("gridContainer");

//? public variable
let countSpan = 5;

// TODO: GO...:)
function startGame() {
  let namePlayer = window.prompt("Enter Your Name:");
  if (namePlayer) {
    sayHello(namePlayer);
    setTimeout(() => {
      gridContainer.innerHTML = ""; //? to clear
      generateSpans();
    }, 2000);
  } else {
    alert("something is wrong! .. please try again");
  }
}

//TODO: to create span ele and put in the grid container
function generateSpans() {
  const numItems = Math.pow(countSpan, 2);
  const numColumns = Math.ceil(Math.sqrt(numItems));
  for (let i = 0; i < numItems; i++) {
    const span = document.createElement("span");
    gridContainer.appendChild(span);
  }
  setTimeout(() => {
    setActiveSpans(numColumns);
  }, 200);
  gridContainer.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${numColumns}, 1fr)`;
}

// TODO: The piece that the player must remember and add its color that distinguishes it
function setActiveSpans(n) {
  let allSpans = Array.from(gridContainer.children);
  for (let i = 0; i < n + 2; i++) {
    let randomNum = Math.floor(Math.random() * allSpans.length);
    allSpans[randomNum].classList.add("active");
  }
}

// TODO: A simple welcome message to the player
function sayHello(namePlayer) {
  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(`Hi ${namePlayer}`);
  h3.className = "playerName";
  h3.appendChild(h3Text);
  gridContainer.appendChild(h3);
}

startGame();
