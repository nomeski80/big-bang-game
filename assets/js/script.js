// Wait for the DOM to finish loading befre running the game
//Document.addEventListener("DOMContentLoaded", function () {
 //   let buttons = document.getElementsByTagName("button")

   // function runGame() {

  //  }
    
// Get the button elements and add event listeners to them
// explain the rules and how to play
//encourage player to select their choice
//function displayPlayerChoice() {

//}
//computer picks a choice

console.log("ready")

const choices = ["rock", "paper", "scissors", "lizard", "spock"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById ("resultDisplay")

function playGame(playerChoice) {

    const computerChoice = choices[Math.floor(Math.random() *5)];
let result = "";

if(playerChoice === computerChoice){
    result = "It's a tie!"
} else {
    switch(playerChoice){
        case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : " YOU LOSE";
            break;
        case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : " YOU LOSE";
        case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : " YOU LOSE";
    }
}

playerDisplay.textContent.Content = `PLAYER ${playersChoice}`;
computerDisplay.textContent.Content = `PLAYER ${computersChoice}`;
resultDisplay.textContent = result;

 


//function diaplayComputerChoice() {

//}
// compares the choices
// display winner

//add score

//} 

}