//Get Computer Choice

function getComputerChoice() {
    let randomInt = Math.floor(Math.random() * 3);

    const choices = ["Rock", "Paper", "Scissors"];

    return choices[randomInt];
}

// Get Human Choice

 function getHumanChoice() {
    let userChoice = prompt("Please enter your choice: Rock, Paper, or Scissors", "Rock");
    userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();

        while (userChoice !== "Rock" && userChoice !== "Paper" && userChoice !== "Scissors") {
            alert("Please enter a valid option. Try again.");
            userChoice = prompt("Please enter your choice: Rock, Paper, or Scissors", "Rock");
            userChoice = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        }

    return userChoice;
}

// Play Game

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            alert("It's a tie!  Please try again!");
            playRound(getHumanChoice(), getComputerChoice());
    
        } else if(humanChoice === "Rock" && computerChoice === "Scissors") {
            alert(`You Win!!! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    
        } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
            alert(`You Win!!! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    
        } else if (humanChoice === "Paper" && computerChoice === "Rock") {
            alert(`You Win!!! ${humanChoice} beats ${computerChoice}!`);
            humanScore++;
    
        } else {
            alert(`You Lose!!! ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
        }
    }

    for(let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        alert(`Game Over!  You Win!!! \n \n You: ${humanScore} \n Computer: ${computerScore}`)
    } else {
        alert(`Game Over! You Lose... \n \n Computer: ${computerScore} \n You: ${humanScore}`)
    }
}

playGame();










