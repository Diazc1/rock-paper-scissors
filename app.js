const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');

const possibleChoices = document.querySelectorAll('button');
let userChoice


possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    //generate computer choice
    generateComputerChoice()
}))


function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use possibleChoices.length
    // console.log(randomNumber);

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }

    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }

    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice

}