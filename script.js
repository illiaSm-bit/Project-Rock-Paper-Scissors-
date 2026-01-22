let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  console.log(computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("0 = rock, 1 = paper, 2 = scissors");
  console.log(humanChoice);
  return humanChoice;
}

function playRound(first, second) {
  if (first == second) {
    return console.log("Draw");
  } else if (first == 0 && second == 2) {
    return (console.log("human win"), (humanScore += 1));
  } else if (second == 0 && first == 2) {
    return (console.log("computer win"), (computerScore += 1));
  } else if (first < second) {
    return (console.log("computer win"), (computerScore += 1));
  } else if (first > second) {
    return (console.log("human win"), (humanScore += 1));
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  console.log(humanScore);
  console.log(computerScore);
}

playGame();
