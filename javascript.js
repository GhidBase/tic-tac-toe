
let playerScore = 0;
let computerScore = 0;
let ties = 0;
let result = "";
let playerChoice = "";
let computerChoice = "";
let message = "";

const winsDisplay = document.querySelector("#wins")
const lossesDisplay = document.querySelector("#losses");
const tiesDisplay = document.querySelector("#ties");
const messageDisplay = document.querySelector("#message");
finalMessageDisplay = document.querySelector("#final-message");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click",() => buttonClicked(button))
});

function buttonClicked(button) {
    playRound(button.id);
};

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

function displayScores() {
    winsDisplay.textContent = "Wins: " + playerScore;
    lossesDisplay.textContent = "Losses " + computerScore;
    tiesDisplay.textContent = "Ties :" + ties;
    message = "Computer played " + computerChoice + " versus your " + playerChoice + ". Match: " + result;
    messageDisplay.textContent = message;
    
    if (playerScore == 5) {
        finalMessageDisplay.textContent = "You won 5 times. You win!"
        message = "5 wins/losses reached. Refresh page to restart."
        messageDisplay.textContent = message;
    }

    if (computerScore == 5) {
        finalMessageDisplay.textContent = "The computer won 5 times. You lose."
        message = "5 wins/losses reached. Refresh page to restart."
        messageDisplay.textContent = message;
    }
}



function playRound(humanChoice) {
    if (playerScore == 5 || computerScore == 5) {
        return;
    }
    playerChoice = humanChoice;
    computerChoice = getComputerChoice();
    result = findResult();
    incrementScore();
    displayScores();
}

