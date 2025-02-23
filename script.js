const GAMESTATE = ["ready", "playing", "finished"];
let state = false;
let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll(".gameButton");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playGameUI(button.id);
  });
});
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

//function to check the game state?
function checkGameState() {
  if (humanScore === 5 || computerScore === 5) {
    humanScore = 0;
    computerScore = 0;
  }
}

function checkWinner() {
  const resDiv = document.querySelector("#finalResult");
  if (humanScore === 5) {
    resDiv.textContent = `You WIN with a score of ${humanScore} : ${computerScore}`;
    console.log(`You WIN with a score of ${humanScore} : ${computerScore}`);
  } else if (computerScore === 5) {
    resDiv.textContent = `You lose with a SCORE OF ${humanScore} : ${computerScore}`;
    console.log(`You lose with a SCORE OF ${humanScore} : ${computerScore}`);
  }
}

function playGameUI(userInput) {
  function playRound(humanChoice, computerChoice) {
    const outDiv = document.querySelector("#outputTxt");
    if (humanChoice === computerChoice) {
      outDiv.textContent = `DRAW! Both players choose ${computerChoice}!`;
      console.log(`DRAW! Both players choose ${computerChoice}!`);
    } else if (
      (humanChoice === "rock" && computerChoice == "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      outDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
      console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
      humanScore++;
    } else {
      outDiv.textContent = `You lose! ${humanChoice} beats ${computerChoice}!`;
      console.log(`You lose! ${humanChoice} beats ${computerChoice}!`);
      computerScore++;
    }
    outDiv.textContent += ` HUMAN: ${humanScore} - COMPUTER: ${computerScore}`;
    console.log(`HUMAN: ${humanScore} - COMPUTER: ${computerScore}`);
  }

  computerChoice = getComputerChoice();
  checkGameState();
  playRound(userInput, computerChoice);
  checkWinner();
}
