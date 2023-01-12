let playerWinCount = 0;
let computerWinCount = 0;
let computerChoice = '';

// Scores and results
let results = document.querySelector('.results');

let playerScore = document.createElement('div');
results.appendChild(playerScore);
playerScore.classList.add('player-score');
let playerResult = `Player: ${playerWinCount}`;
playerScore.textContent = playerResult;

let computerScore = document.createElement('div');
results.appendChild(computerScore);
computerScore.classList.add('computer-score');
let computerResult = `Computer: ${computerWinCount}`;
computerScore.textContent = computerResult;

let resultText = document.createElement('div');
results.appendChild(resultText);
resultText.classList.add('result-text');


// Use event delegation on buttons div to get value for playerChoice, then pass playerChoice into playRound
let buttons = document.querySelector('.btns');
buttons.addEventListener('click', function (e) { 
  let playerChoice = e.target.textContent;
  playRound(playerChoice, computerPlay(1, 3));
});

// Computer makes a choice at random
function computerPlay(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === 1) {
    computerChoice = 'Rock';
    console.log(`The computer chose ${computerChoice}.`);
    return computerChoice;
  } else if (randNumber === 2) {
    computerChoice = 'Paper';
    console.log(`The computer chose ${computerChoice}.`);
    return computerChoice;
  } else {
    computerChoice = 'Scissors';
    console.log(`The computer chose ${computerChoice}.`);
    return computerChoice;
  }
}

// // Player makes their choice
// function playerPlay() {
//   let playerChoice = prompt('Rock, Paper, or Scissors? ', '').toLowerCase();
//   if (playerChoice === 'rock') {
//     console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
//     return 'Rock';
//   } else if (playerChoice === 'paper') {
//     console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
//     return 'Paper';
//   } else if (playerChoice === 'scissors') {
//     console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
//     return 'Scissors';
//   } else {
//     console.log('Sorry, you must choose either Rock, Paper, or Scissors. Please try again!');
//     return playerPlay();
//   }
// }

function updateScore(score) {
  if(score === 'computer') {
    computerWinCount++;

  }
}

// Execute single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let computerChoiceText = `The computer chose ${computerChoice}. `;
  let winner = '';
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    let roundResult = 'You lose this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    let roundResult = 'You win this round! Rock beats Scissors.';
    resultText.textContent = computerChoiceText + roundResult;
    playerWinCount++;
    playerScore.textContent = playerWinCount;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    let roundResult = 'You win this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    playerWinCount++;
    playerScore.textContent = playerWinCount;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    console.log('You lose this round! Scissors beats Paper.');
    return computerWinCount++;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    console.log('You lose this round! Rock beats Scissors.');
    return computerWinCount++;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    console.log('You win this round! Scissors beats Paper.');
    return playerWinCount++;
  } else if (playerSelection === computerSelection) {
    console.log('This round is a tie!');
  } else {
    console.log('Please click on a button to play!');
  }
  updateScore(winner);
}

// // Execute 5-round game of Rock Paper Scissors and announce the game result
// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound(playerPlay(), computerPlay(1,3));
//   }
//   if (playerWinCount > computerWinCount) {
//     console.log(`You win ${playerWinCount} to ${computerWinCount}!`);
//   } else if (playerWinCount === computerWinCount) {
//     console.log(`It\'s a tie! ${playerWinCount} to ${computerWinCount}.`);
//   } else {
//     console.log(`You lose ${playerWinCount} to ${computerWinCount}!`);
//   }
// }

// game();