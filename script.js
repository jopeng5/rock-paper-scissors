let buttons = document.querySelector('.btns');
let playerChoice = document.querySelector('.player-choice');
let computerChoice = document.querySelector('.computer-choice');
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let results = document.querySelector('.results');

let playerWinCount = 0;
let computerWinCount = 0;

buttons.addEventListener('click', (e) => { 
  let playerPlay = e.target.textContent;
  playRound(playerPlay, computerPlay(1, 3));
});

function playRound(pChoice, cChoice) {
  playerChoice.textContent = `Your Choice: ${pChoice}`;
  computerChoice.textContent = `Computer's Choice: ${cChoice}`;
  let roundResult = '';
  let winner = '';
  if (pChoice === 'Rock' && cChoice === 'Paper') {
    roundResult = 'You lose this round! Paper beats Rock.';
    winner = 'computer';
    computerWinCount++;
  } else if (pChoice === 'Rock' && cChoice === 'Scissors') {
    roundResult = 'You win this round! Rock beats Scissors.';
    winner = 'player';
    playerWinCount++;
  } else if (pChoice === 'Paper' && cChoice === 'Rock') {
    roundResult = 'You win this round! Paper beats Rock.';
    winner = 'player';
    playerWinCount++;
  } else if (pChoice === 'Paper' && cChoice === 'Scissors') {
    roundResult = 'You lose this round! Scissors beats Paper.';
    winner = 'computer';
    computerWinCount++;
  } else if (pChoice === 'Scissors' && cChoice === 'Rock') {
    roundResult = 'You lose this round! Rock beats Scissors.';
    winner = 'computer';
    computerWinCount++;
  } else if (pChoice === 'Scissors' && cChoice === 'Paper') {
    roundResult = 'You win this round! Scissors beats Paper.';
    winner = 'player';
    playerWinCount++;
  } else if (pChoice === cChoice) {
    roundResult = 'This round is a tie!';
    winner = '';
  } else {
    roundResult = 'Please click on a button to play!';
    winner = '';
  }
  results.textContent = roundResult;
  updateScore(winner);
}

function updateScore(winner) {
  if (winner === 'computer' && playerWinCount < 5 && computerWinCount < 5) {
    computerScore.textContent = `Computer's Score: ${computerWinCount}`;
  }
  else if (winner === 'player' && playerWinCount < 5 && computerWinCount < 5) {
    playerScore.textContent = `Your Score: ${playerWinCount}`;
  }
  else if (winner === '' && playerWinCount < 5 && computerWinCount < 5) {
    results.textContent = `This round is a tie!`;
  }
  else if (winner === 'player' && playerWinCount === 5) {
    playerScore.textContent = `Your Score: ${playerWinCount}`;
    results.textContent = 'You win! Refresh to play again!'; 
  }
  else if (winner === 'computer' && computerWinCount === 5) {
    computerScore.textContent = `Computer's Score: ${computerWinCount}`;
    results.textContent = 'Computer wins! Refresh to play again!';
  }
  else if (computerWinCount > 5 || playerWinCount > 5) {
    results.textContent = 'Game over! Please refresh to play again! :)';
  }
}

function computerPlay(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === 1) {
    choice = 'Rock';
  } else if (randNumber === 2) {
    choice = 'Paper';
  } else {
    choice = 'Scissors';
  }
  return choice;
}