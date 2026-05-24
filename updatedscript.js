Math.random

const startButton = document.getElementById("play-button");
const userField = document.getElementById("input-field");
const resultsField = document.getElementById("results-field");
const startQuestion = document.getElementById("question-prompt");

startButton.addEventListener("click", playGame);


function playGame() {
    startButton.hidden = true;
    startQuestion.hidden = true;
    let humanScore = 0;
    let ComputerScore = 0;
    getHumanChoice();
        
}

function getComputerChoice() {
    let odds = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(odds) {
        case 1 :
            computerChoice = "ROCK";
            break;
        case 2 :
            computerChoice = "PAPER";
            break;
        case 3 :
            computerChoice = "SCISSORS";
            break;
    }
    return computerChoice;
}

function getHumanChoice() {

    const inputBox = document.createElement("input");
    userField.appendChild(inputBox);

    const inputSubmit = document.createElement("button");
    inputSubmit.textContent = "Enter";
    userField.appendChild(inputSubmit);

    inputSubmit.addEventListener("click", function(event) {
        event.preventDefault();
        let humanChoice = inputBox.value;
        console.log(humanChoice)
        inputSubmit.hidden = true;
        inputBox.hidden = true;
    })
}