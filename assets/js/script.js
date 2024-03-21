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