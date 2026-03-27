Math.random
function getComputerChoice() {
    let odds = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(odds) {
        case 1:
            computerChoice = "ROCK";
        case 2:
            computerChoice = "PAPER";
        case 3:
            computerChoice = "SCISSORS";
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