
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let result = "";
let playerChoice = "";
let computerChoice = "";


function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33333) return "rock"
    else if (randomNumber < 0.66666) return "paper"
    else return "scissors";
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?").toLowerCase();
}

function findResult() {
    if (playerChoice == "rock" && computerChoice == "rock") return "tie";
    if (playerChoice == "scissors" && computerChoice == "scissors") return "tie";
    if (playerChoice == "paper" && computerChoice == "paper") return "tie";
    if (playerChoice == "rock" && computerChoice == "scissors") return "win";
    if (playerChoice == "rock" && computerChoice == "paper") return "lose";
    if (playerChoice == "paper" && computerChoice == "scissors") return "lose";
    if (playerChoice == "paper" && computerChoice == "rock") return "win";
    if (playerChoice == "scissors" && computerChoice == "paper") return "win";
    if (playerChoice == "scissors" && computerChoice == "rock") return "lose";
}

function incrementScore() {
    if (result == "win") ++playerScore;
    if (result == "lose") ++computerScore;
    if (result == "tie") ++ties;
}

function playRound() {
    playerChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    result = findResult();
    incrementScore();
}

