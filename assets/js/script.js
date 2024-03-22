// Wait for the DOM to finish loading befre running the game
// Get the buttin elements and add event listeners to them

DocumentTimeline.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementsByTagName("button")

    for (let buttons of butons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit!);
            } else {
                let  gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
            }
        })
    }
})


let compChoice = document.getElementById('computer-choice')
let yourChoice = document.getElementById('user-choice')
let resultDisplay = document.getElementById('result')
let playButton = document.getElementById('play')
let possibleChoices = ['rock', 'paper', 'scissors']

let choices = document.getElementsByName('choice')
choices.forEach((c) => {
    c.addEventListener('click', () => {
        playButton.disabled = false
    })
})

playButton.addEventListener('click', (e) => {
    let buttonsArray = Array.from(choices)
    let selected = buttonsArray.filter((b) => b.checked)
    addTextToSpan(yourChoice, selected[0].id)
})

function addTextToSpan(spanControl, text) {
    spanControl.textContent = text
}

function runGame() {

}

function displayPlayerChoice () {

}

function diaplayComputerChoice () {

}

function incrementScore () {

}