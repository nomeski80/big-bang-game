 

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");



//player picks then the computer creates a random choice


function playGame(playerChoice) {

    let playerHasWon = false;

    const computerChoice = choices[Math.floor(Math.random() * 5)];
    let result = "";

    // compares the choices
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else {
        switch (playerChoice) {
            case "rock":
                playerHasWon = (computerChoice === "scissors" || computerChoice === "lizard");
                result = playerHasWon ? "YOU WIN!" : " YOU LOSE";
                playerHasWon ? incrementPlayerScore() : incrementComputerScore();
                break;
            case "paper":
                playerHasWon = (computerChoice === "rock" || computerChoice === "spock");
                result = playerHasWon ? "YOU WIN!" : " YOU LOSE";
                playerHasWon ? incrementPlayerScore() : incrementComputerScore();
                break;
            case "scissors":
                playerHasWon = (computerChoice === "paper" || computerChoice === "lizard");
                result = playerHasWon ? "YOU WIN!" : " YOU LOSE";
                playerHasWon ? incrementPlayerScore() : incrementComputerScore();
                break;
            case "lizard":
                playerHasWon = (computerChoice === "paper" || computerChoice === "spock");
                result = playerHasWon ? "YOU WIN!" : " YOU LOSE";
                playerHasWon ? incrementPlayerScore() : incrementComputerScore();
                break;
            case "spock":
                playerHasWon = (computerChoice === "rock" || computerChoice === "scissors");
                result = playerHasWon ? "YOU WIN!" : " YOU LOSE";
                playerHasWon ? incrementPlayerScore() : incrementComputerScore();
                break;
        }
    }
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    // display winner
    resultDisplay.textContent = result;

}

let newUserScore = 0
//add score to the player
function incrementPlayerScore() {

    let userScore = parseInt(document.getElementById("userScore").innerText);
    userScore++;
    document.getElementById("userScore").innerText = userScore;
    

}

//add score for the computer
function incrementComputerScore() {

    let computerScore = parseInt(document.getElementById("computerScore").innerText);
    computerScore++;
    document.getElementById("computerScore").innerText = computerScore;

}

//button to show or hide the rules
function showRules() {
    var x = document.getElementById("game-rules");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}