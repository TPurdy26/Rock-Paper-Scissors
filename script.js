Math.random

let humanScore = 0;
let computerScore = 0;

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
    let humanChoice = String(prompt("Enter Rock, Paper, or Scissors to play the game:")).toUpperCase();
    console.log(humanChoice)
    while(humanChoice !== "ROCK" && humanChoice !== "PAPER" && humanChoice !== "SCISSORS") {
        alert("Invalid Input")
        humanChoice = String(prompt("Enter Rock, Paper, or Scissors to play the game:")).toUpperCase();
    }
    return humanChoice;
}

function playRound() {
    let humanMove = getHumanChoice();
    let computerMove = getComputerChoice();
    if (humanMove === "ROCK" && computerMove === "SCISSORS") {
        alert("Computer's Move: " + computerMove + "\nYou won!");
        humanScore++;
    } else if (humanMove === "PAPER" && computerMove === "ROCK") {
        alert("Computer's Move: " + computerMove + "\nYou won!");
        humanScore++;
    } else if (humanMove === "SCISSORS" && computerMove === "PAPER") {
        alert("Computer's Move: " + computerMove + "\nYou won!");
        return "USER WON";
        humanScore++;
    } else if (humanMove === computerMove) {
        alert("Computer's Move: " + computerMove + "\n It's a tie!");
    } else {
        alert("Computer's Move: " + computerMove + "\nYou lost!");
        computerScore++;
    }
}

function playGame() {
    while(humanScore + computerScore < 5){
        playRound();
        alert("Your score: " + humanScore + "\nComputer score: " + computerScore);
    }
    if (humanScore >= computerScore) {
        alert('You won the game!')
    } else {
        alert("You lost :(\nBetter luck next time!")
    }
}

playGame()