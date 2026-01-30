let buttonContainer = document.querySelector("#button-container");
let screen = document.querySelector("#result");
let playerChoice = null;

let start = document.querySelector("#start");

buttonContainer.addEventListener("click", (event) => {
  let target = event.target;
  switch (target.id) {
    case "rock-button":
      playerChoice = 0;
      break;
    case "paper-button":
      playerChoice = 1;
      break;
    case "scissors-button":
      playerChoice = 2;
      break;
  }
});

let humanScore = 0;
let computerScore = 0;
let draw = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  return computerChoice;
}

function playRound(first, second) {
  if (first == second) {
    return (console.log("Draw"), draw++);
  } else if (first == 0 && second == 2) {
    return (console.log("human win"), humanScore++);
  } else if (second == 0 && first == 2) {
    return (console.log("computer win"), computerScore++);
  } else if (first < second) {
    return (console.log("computer win"), computerScore++);
  } else if (first > second) {
    return (console.log("human win"), humanScore++);
  }
}

start.addEventListener("click", () => {
  playRound(playerChoice, getComputerChoice());
  screen.textContent =
    "human: " + humanScore + " computer: " + computerScore + " Draw:" + draw;
});
screen.textContent =
  "human: " + humanScore + " computer: " + computerScore + " Draw:" + draw;
