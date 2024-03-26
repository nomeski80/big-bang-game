// Wait for the DOM to finish loading befre running the game
//Document.addEventListener("DOMContentLoaded", function () {
//   let buttons = document.getElementsByTagName("button")

// function runGame() {

//  }

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")


//player picks then the computer creates a random choice
function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

// compares the choices
if (playerChoice === computerChoice) {
        result = "It's a tie!"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors", "lizard") ? "YOU WIN!" : " YOU LOSE";
                incrementPlayerScore()
                break;
            case "paper":
                result = (computerChoice === "rock", "spock") ? "YOU WIN!" : "YOU LOSE";
                incrementPlayerScore()
                break;
            case "scissors":
                result = (computerChoice === "paper", "lizard") ? "YOU WIN!" : "YOU LOSE";
                incrementPlayerScore()
                break;
            case "lizard":
                result = (computerChoice === "paper", "spock") ? "YOU WIN!" : "YOU LOSE";
                incrementPlayerScore()
                break
            case "spock":
                result = (computerChoice === "rock", "scissors") ? "YOU WIN!" : " YOU LOSE";
                incrementPlayerScore() 
                break;
        }
    }
    //need to add a call function here to 'if' you win incrementScore
//
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    // display winner
    resultDisplay.textContent = result;

}
//add score to the player
function incrementPlayerScore() {

    let userScore = parseInt(document.getElementById("user-score").innerText);
    document.getElementById("user-score").innerText = ++oldScore;

}

//add score for the computer
function incrementComputerScore() {

    let computerScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;

}

//button to show or hide the rules
function showRules() {
    var x = document.getElementById("game-rules");
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}