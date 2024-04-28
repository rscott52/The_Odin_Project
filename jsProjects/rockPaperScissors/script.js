// Declared Variables for Scores and Round count. 
let humanScore  = 0;
let computerScore = 0;
let roundCount= 0;

// Function that generates the Computer Choice at random.
function getComputerChoice() {
    let comChoice = ["rock", "paper", "scissors"]
    return comChoice[(Math.floor(Math.random() * comChoice.length))];
};

// Function that generates the Choice of the Player
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
};

// Function that compares the Player Choice to the Computer Choice, and tracks scores. 
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

// Function that tracks the round count and gives the final output of who wins. 
function playGame() {
    for (let roundCount = 0; roundCount <= 5; roundCount++) {
        if (roundCount < 5 && getHumanChoice) {
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

// Invokes the function to run the game. 
playGame();