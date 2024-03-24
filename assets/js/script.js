// Wait for the DOM to finish loading befre running the game
//Document.addEventListener("DOMContentLoaded", function () {
//   let buttons = document.getElementsByTagName("button")

// function runGame() {

//  }

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay")

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    // compares the choices

    if (playerChoice === computerChoice) {
        result = "It's a tie!"
    } else {
        switch (playerChoice) {
            case "rock":
                result = (computerChoice === "scissors", "lizard") ? "YOU WIN!" : " YOU LOSE";
                break;
            case "paper":
                result = (computerChoice === "rock", "spock") ? "YOU WIN!" : " YOU LOSE";
                break;
            case "scissors":
                result = (computerChoice === "paper", "lizard") ? "YOU WIN!" : " YOU LOSE";
                break;
            case "lizard":
                result = (computerChoice === "paper", "spock") ?"YOU WIN!" : "YOU LOSE";
                break
                case "spock":
                result = (computerChoice === "rock", "scissors") ? "YOU WIN!" : " YOU LOSE";
                break;
        }
    }
    //need to add a call function here to 'if' you win incrementScore

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    // display winner
    resultDisplay.textContent = result;

    //add score

    function incrementScore() {
        let oldScore = parseInt(document.getElementById("user-score").innerText);
        document.getElementById("user-score").innerText + oldScore;
    }



}