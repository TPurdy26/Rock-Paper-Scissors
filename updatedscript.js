Math.random

const startQuestion = document.getElementById("question-prompt");
const startButton = document.getElementById("play-button");
const elementsField = document.getElementById("input-field");

startButton.addEventListener("click", playGame);

function playGame() {
    startButton.hidden = true;
    startQuestion.hidden = true;
    let humanScore = 0;
    let computerScore = 0;
    // if humanScore === 5 || computerScore === 5 {
    //     const winner = 
    // } 
}

function playRound() {
    let humanMove = getHumanChoice();
    let computerMove = getComputerChoice();

    const results = document.createElement("div");

    if (humanMove === "Rock" && computerMove === "Scissors") {
        results.textContent = "Your move: " + humanMove + "\nComputer's Move: " + computerMove + "\nYou won!";
        humanScore++;
    } else if (humanMove === "Paper" && computerMove === "Rock") {
        results.textContent = "Computer's Move: " + computerMove + "\nYou won!";
        humanScore++;
    } else if (humanMove === "Scissors" && computerMove === "Paper") {
        results.textContent = "Your move: " + humanMove + "\nComputer's Move: " + computerMove + "\nYou won!";
        return "USER WON";
        humanScore++;
    } else if (humanMove === computerMove) {
        results.textContent = "Your move: " + humanMove + "\nComputer's Move: " + computerMove + "\n It's a tie!";
    } else {
        results.textContent = "Your move: " + humanMove + "\nComputer's Move: " + computerMove + "\nYou lost!";
        computerScore++;
    }
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

function getHumanChoice() {
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
            return event.target.textContent;
        })
    })
}

playRound()