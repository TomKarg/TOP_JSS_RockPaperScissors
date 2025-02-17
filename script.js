console.log("Hello World");

const choice = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

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
