Math.random

const startQuestion = document.getElementById("question-prompt");
const startButton = document.getElementById("play-button");
const elementsField = document.getElementById("input-field");

let humanScore = 0;
let computerScore = 0;

startButton.addEventListener("click", playGame);

function playGame() {
    startButton.hidden = true;
    startQuestion.hidden = true;

    if (humanScore <= 5 && computerScore <= 5) {
    playRound();
    const scores = document.createElement("div");
    scores.textContent = "Cool Boy"

}
}

function playRound() {

    getHumanChoice((humanMove) => {
        let computerMove = getComputerChoice();

        const humanResults = document.createElement("div");
        const computerResults = document.createElement("div");
        const whoWon = document.createElement("div");

        humanResults.textContent = "Your move: " + humanMove;
        computerResults.textContent = "Computer's move: " + computerMove; 

        if (humanMove === "Rock" && computerMove === "Scissors") {
            whoWon.textContent = "You won!";
            humanScore++;
        } else if (humanMove === "Paper" && computerMove === "Rock") {
            whoWon.textContent = "You won!";
            humanScore++;
        } else if (humanMove === "Scissors" && computerMove === "Paper") {
            whoWon.textContent = "You won!";
            humanScore++;
        } else if (humanMove === computerMove) {
            whoWon.textContent = "It's a tie!";
        } else {
            whoWon.textContent = "You lost!";
            computerScore++;
        }

        elementsField.appendChild(humanResults);
        elementsField.appendChild(computerResults);
        elementsField.appendChild(whoWon);
        });
}

function getComputerChoice() {
    let odds = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(odds) {
        case 1 :
            computerChoice = "Rock";
            break;
        case 2 :
            computerChoice = "Paper";
            break;
        case 3 :
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function getHumanChoice(callBack) {
    const rockButton = document.createElement("button");
    rockButton.classList.add("user_button");
    rockButton.textContent = "Rock";
    elementsField.appendChild(rockButton);

    const paperButton = document.createElement("button");
    paperButton.classList.add("user_button");
    paperButton.textContent = "Paper";
    elementsField.appendChild(paperButton);

    const scissorsButton = document.createElement("button");
    scissorsButton.classList.add("user_button");
    scissorsButton.textContent = "Scissors";
    elementsField.appendChild(scissorsButton);

    const buttons = document.querySelectorAll(".user_button");

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            rockButton.hidden = true;
            paperButton.hidden = true;
            scissorsButton.hidden = true;

            callBack(event.target.textContent);
        })
    })
}