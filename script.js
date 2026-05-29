const scoresField = document.getElementById("scores_field");
const computerField = document.getElementById("computers_move");
const resultsField = document.getElementById("results_field");
const nextRoundButton = document.getElementById("next_round_button");
const choiceField = document.getElementById("choice_field");
const userScore = document.getElementById("your_score");
const computerScore = document.getElementById("computer_score");

const choiceButtons = document.querySelectorAll(".choice_button");

const allItems = document.querySelector("body");

let humanScore = 0;
let robotScore = 0;

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

choiceButtons.forEach(button => {
    button.addEventListener('click', function(event) {

        choiceField.textContent = "Your Move: " + event.target.textContent;

        playGame(event.target.textContent);
    })
})

function playGame(humanMove) {
    let computerMove = getComputerChoice();

    if (
        (humanMove === "Rock" && computerMove === "Scissors") ||
        (humanMove === "Paper" && computerMove === "Rock") ||
        (humanMove === "Scissors" && computerMove === "Paper")
    ) {

        resultsField.textContent = "You won!";
        humanScore++;

    } else if (humanMove === computerMove) {

        resultsField.textContent = "It's a tie!";

    } else {

        resultsField.textContent = "You lost!";
        robotScore++;

    }

    userScore.textContent = "You: " + humanScore;
    computerScore.textContent = "Computer: " +robotScore;

    computerField.textContent = "Computer's Move: " + computerMove;

    if (
    humanScore === 3
    ) {
    allItems.hidden = true;

    const finalStanding = document.createElement("h1");
    finalStanding.classList.add("final_standing");
    finalStanding.textContent = "YOU WON!!!";
    document.appendChild(finalStanding);
}
}