/* Rock, Paper, Scissors Game

1. Get Computer Choice
- Write a function that will get the computer's choice (getComputerChoice)
- Computer will return one of the following random string values "rock", "paper", or "scissors"
- Use the Math.random method
- Test using console.log

2. Get User Choice
- Write a function that takes the user choice and returns it (getHumanChoice)
- Use prompt to get user input and return one of the valid options "rock", "paper", or "scissors" 
- Test using console.log

3. Declare player score variables
- Create two new variable in the global scope (humanScore & computerScore)
- Initialize both with a value of 0

4. Write logic to play one round
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

}