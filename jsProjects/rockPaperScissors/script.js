let humanScore  = 0;
let computerScore = 0;
let roundCount= 0;


function getComputerChoice() {
    let comChoice = ["rock", "paper", "scissors"]
    return comChoice[(Math.floor(Math.random() * comChoice.length))];
};

getComputerChoice();

function getHumanChoice () {
   let humChoice = prompt("Please Choose rock, paper, or scissors");

    if (humChoice.toLowerCase() === "rock") {
        return "rock";
    } else if (humChoice.toLowerCase() === "paper") {
        return "paper";
    } else if (humChoice.toLowerCase() === "scissors") {
        return "scissors";
    } else {
        alert("That is not a valid selection, please try again!")
    }   
}

function playRound(getHumanChoice, getComputerChoice) {

    if (getHumanChoice === "rock" && getComputerChoice === "scissors"){
        console.log("You won this round!");
        humanScore++;
    } else if (getHumanChoice === "rock" && getComputerChoice === "paper") {
        console.log("You lost this round!"); 
        computerScore++;
    } else if (getHumanChoice === "rock" && getComputerChoice === "rock") {
        console.log("It's a tie, try again!");
    } else if (getHumanChoice === "paper" && getComputerChoice === "rock"){
        console.log("You won this round!");
        humanScore++;
    } else if (getHumanChoice === "paper" && getComputerChoice === "scissors") {
        console.log("You lost this round!"); 
        computerScore++;
    } else if (getHumanChoice === "paper" && getComputerChoice === "paper") {
        console.log("It's a tie, try again!");
    } else if (getHumanChoice === "scissors" && getComputerChoice === "paper"){
        console.log("You won this round!");
        humanScore++;
    } else if (getHumanChoice === "scissors" && getComputerChoice === "rock") {
        console.log("You lost this round!"); 
        computerScore++;
    } else if (getHumanChoice === "scissors" && getComputerChoice === "scissors") {
        console.log("It's a tie, try again!");
    }
};

function playGame() {
    for (let roundCount = 0; roundCount <= 5; roundCount++) {
        if (roundCount < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        } else {
            if (humanScore > computerScore) {
            console.log("Game over! You scored " + humanScore + " and the Computer scored " + computerScore + ". Congratulations on the victory!")
            } else {
                console.log("Game over! You scored " + humanScore + " and the Computer scored " + computerScore + ". Better luck next time!")
            }
        }
    }
};
playGame();