"use strict";

let pScore = 0;
let cScore = 0;

function computerPlay() {
  const cOptions = ["Rock", "Paper", "Scissors"];
  const cInput = cOptions[Math.floor(Math.random() * 3)];
  return cInput;
}

function playRound(playerSelection, computerSelection) {
  const currentMatch = `${playerSelection} vs ${computerSelection}`;
  if (playerSelection === computerSelection) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      alert(`You Win! ${currentMatch}.`);
      pScore++;
    } else {
      alert(`Computer Wins! ${currentMatch}.`);
      cScore++;
    }
  }
  //Check for Paper
  else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      alert(`You Win! ${currentMatch}.`);
      pScore++;
    } else {
      alert(`Computer Wins! ${currentMatch}.`);
      cScore++;
    }
  }
  //Check for Scissors
  else {
    if (computerSelection === "Paper") {
      alert(`You Win! ${currentMatch}.`);
      pScore++;
    } else {
      alert(`Computer Wins! ${currentMatch}.`);
      cScore++;
    }
  }
}

onload = function game() {
  for (let i = 0; i < 5; i++) {
    const roundNumber = `---This is round number ${i + 1}---`;
    const playerSelection = prompt("Rock, paper or scissors?");
    const playerLower = playerSelection.toLowerCase();
    const playerSelectionCorrect =
      playerSelection[0].toUpperCase() + playerLower.slice(1);
    const computerSelection = computerPlay();
    playRound(playerSelectionCorrect, computerSelection);
    console.log(roundNumber);
    console.log("Your score is " + pScore);
    console.log("The computer's score is " + cScore);
  }
  console.log("Game over!");
  if (pScore > cScore) {
    console.log("Player wins the game!");
  } else if (cScore === pScore) {
    console.log("It's a tie!");
  } else {
    console.log("Computer wins the game!");
  }
};
