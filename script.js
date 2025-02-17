console.log("Hello World");

const choice = ["rock", "paper", "scissors"];
// let humanScore = 0;
// let computerScore = 0;

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3); //this gives us random 0, 1, 2
  return choice[rand];
}

//no  input validation implemented
function getHumanChoice() {
  while (true) {
    let answer = prompt('Choose between "rock", "paper" or "scissors"');
    answer = answer.toLowerCase();
    if (choice.includes(answer)) {
      return answer;
    }
  }
}

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     console.log(`DRAW! Both players choose ${computerChoice}!`);
//   } else if (
//     (humanChoice === "rock" && computerChoice == "scissors") ||
//     (humanChoice === "scissors" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "rock")
//   ) {
//     console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
//     humanScore++;
//   } else {
//     console.log(`You lose! ${humanChoice} beats ${computerChoice}!`);
//     computerScore++;
//   }
// }

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`DRAW! Both players choose ${computerChoice}!`);
    } else if (
      (humanChoice === "rock" && computerChoice == "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else {
      console.log(`You lose! ${humanChoice} beats ${computerChoice}!`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    console.log(`HUMAN: ${humanScore} - COMPUTER: ${computerScore}`);
  }
}
