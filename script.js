const scoresField = document.getElementById("scores_field");
const computerField = document.getElementById("computers_move");
const resultsField = document.getElementById("results_field");
const nextRoundButton = document.getElementById("next_round_button");
const choiceField = document.getElementById("choice_field");
const userScore = document.getElementById("your_score");
const computerScore = document.getElementById("computer_score");

const choiceButtons = document.querySelectorAll(".choice_button");

let humanScore = 0;
let robotScore = 0;
let isPressed = false;

function getComputerChoice() {
    let odds = Math.floor(Math.random() * 3) + 1;
    let computerChoice
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
    choiceButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            choiceField.textContent = "Your Move: " + event.target.textContent;
            callBack(event.target.textContent);
        })
    })
}

function roundResults(humanMove) {
    let computerMove = getComputerChoice();

    if ((humanMove === "Rock" && computerMove === "Scissors") ||
    (humanMove === "Paper" && computerMove === "Rock") ||
    (humanMove === "Scissors" && computerMove === "Paper")) {
        resultsField.textContent = "You won!";
        humanScore++;    
    } else if (humanMove === computerMove) {
        resultsField.textContent = "It's a tie!";
    } else {
        resultsField.textContent = "You lost!";
        robotScore++;
    }
}

function playRound() {
    getHumanChoice(roundResults);
    
    // computerField.textContent = "Computer's Move: " + computerMove;
    userScore.textContent = "Computer: " + robotScore;
    console.log(robotScore);
}

function playGame() {
}

playRound()