/*Rock, Paper, Scissors
comp randomly chooses from 3 options
each option returns either Rock, Paper, Scissor
Compare user input to comp answer
*/
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
   
   let options = ['rock', 'paper', 'scissors'];

   let randomChoice = options[Math.floor(Math.random()*options.length)];

    return randomChoice;
   
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "It\'s a Tie!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        playerScore++;
        return `Nice! ${playerSelection} beats ${computerSelection}`;
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'scissors' && computerSelection === 'rock')) {
        computerScore++;
        return `Shoot! ${computerSelection} beats ${playerSelection}`;
    } else {
        return "Invalid Input, Try Again";
    }
}

//converts player answer to lowercase
const playerSelection = (prompt('Choose your Weapon!')).toLowerCase();
const computerSelection = computerPlay();

//Run playRound 5 times
//Keeps score for user
//keep score for computer
//reports a winner at the end


function game() {
    

for (let round = 0; round < 5; round++) {
    let results = playRound(playerSelection, computerSelection);
    console.log(results);
}    

if (playerScore > computerScore) {
    return "All Hail the New King!"
} else if (playerScore < computerScore) {
    return "Sucks to suck, sucka"
} else {
    return "Ready to Try Again?"
}
}

console.log(game(playerScore, computerScore));