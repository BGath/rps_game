let playerScore = 0;
let computerScore = 0;

function playComp() {
  let options = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random()*options.length);
  
  if (randomChoice === 0) {
    return 'rock';
  } else if (randomChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound() {
  let compMove = playComp();
  let playerMove = prompt('Hello').toLowerCase();
  
 if (playerMove === compMove) {
   `Player Score: ${playerScore}`;
   `Computer Score: ${computerScore}`;
   return 'It\'s a tie!';
 } else if ((playerMove === 'rock' && compMove === 'scissors' ) || (playerMove === 'scissors' && compMove === 'paper') || (playerMove === 'paper' && compMove === 'rock'))  {
   `Player Score: ${playerScore++}`;
   `Computer Score: ${computerScore}`;
   return `Nice! ${playerMove} > ${compMove}`;
} else if ((playerMove === 'rock' && compMove === 'paper' ) || (playerMove === 'scissors' && compMove === 'rock') || (playerMove === 'paper' && compMove === 'scissors')) {
   `Player Score: ${playerScore}`;
   `Computer Score: ${computerScore++}`;
   return `Shoot! ${playerMove} < ${compMove}`;
} else {
  return 'Come on, really? Try Again';
}
}

//helps keep track of the overall Score
function keepScore() {
  
  if (playerScore > computerScore) {
    `Player Score: ${playerScore}`;
    `Computer Score: ${computerScore}`;
    return 'You Win!';
  } else {
    `Player Score: ${playerScore}`;
    `Computer Score: ${computerScore}`;
    return 'You Lose!';
  }
}

function breakTie() {
  if ((playerScore === 2 && computerScore === 2) || (playerScore === 0 && computerScore === 0)) {
    playRound();
  } 
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
  
  keepScore();
  breakTie();
}

playGame();
