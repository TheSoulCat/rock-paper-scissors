/* Rock, Paper, Scissors Game

1. Get Computer Choice- Completed
- Write a function that will get the computer's choice (getComputerChoice)
- Computer will return one of the following random string values "rock", "paper", or "scissors"
- Use the Math.random method
- Test using console.log

2. Get User Choice - Completed
- Write a function that takes the user choice and returns it (getHumanChoice)
- Use prompt to get user input and return one of the valid options "rock", "paper", or "scissors" 
- Test using console.log

3. Declare player score variables - Completed
- Create two new variable in the global scope (humanScore & computerScore)
- Initialize both with a value of 0

4. Write logic to play one round - Completed
- Write a function that will play a round (playRound)
- Define parameters for playRound function - (humanChoice & computerChoice)
    - Use the two parameters to take the human and computer choices as arguments
- Make your function's humanChoice parameter case-insensitive so that players can input any case variation
- Write the code for your playRound function to console.log a string value representing the round winner
    - Example "You lose! Paper beats Rock"
- Increment the humanScore and computerScore variables based on the round winner

5. Write logic to play the entire game
- Write a function that will call the playRound function 5 times, keeps track of the score and declares a winner at the end - (playGame)
- Nove the playRound function and the score variables so they are declared inside the new playGame function 
    - You need to recall the choice functions to get new choices for each round
- Determine which player has a higher score at the end and declare winner.
*/


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










