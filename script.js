let playerWinCount = 0;
let computerWinCount = 0;
let computerChoice = '';
let winner = '';

// Scores and results
let results = document.querySelector('.results');

let playerScore = document.createElement('div');
results.appendChild(playerScore);
playerScore.classList.add('player-score');
playerScore.textContent = `Player: ${playerWinCount}`;

let computerScore = document.createElement('div');
results.appendChild(computerScore);
computerScore.classList.add('computer-score');
computerScore.textContent = `Computer: ${computerWinCount}`;

let resultText = document.createElement('div');
results.appendChild(resultText);
resultText.classList.add('result-text');


// Use event delegation on buttons div to get value for playerChoice, then pass playerChoice into playRound
let buttons = document.querySelector('.btns');
buttons.addEventListener('click', function (e) { 
  let playerChoice = e.target.textContent;
  if (computerWinCount < 5 && playerWinCount < 5) {
    playRound(playerChoice, computerPlay(1, 3));
  }
  else {
    if (computerWinCount === 5) {
      resultText.textContent = 'Computer wins! Refresh to play again!';
    }
    else {
      resultText.textContent = 'You win! Refresh to play again!';
    }
  } 
});

// Computer makes a choice at random
function computerPlay(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === 1) {
    computerChoice = 'Rock';
    return computerChoice;
  } else if (randNumber === 2) {
    computerChoice = 'Paper';
    return computerChoice;
  } else {
    computerChoice = 'Scissors';
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
    computerScore.textContent = `Computer: ${computerWinCount}`;
  }
  else if (score === 'player') {
    playerWinCount++;
    playerScore.textContent = `Player: ${playerWinCount}`;
  }
}

// Execute single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let computerChoiceText = `The computer chose ${computerChoice}. `;
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    let roundResult = 'You lose this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    let roundResult = 'You win this round! Rock beats Scissors.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
    playerScore.textContent = playerWinCount;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    let roundResult = 'You win this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    let roundResult = 'You lose this round! Scissors beats Paper.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    let roundResult = 'You lose this round! Rock beats Scissors.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    let roundResult = 'You win this round! Scissors beats Paper.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
  } else if (playerSelection === computerSelection) {
    resultText.textContent = 'This round is a tie!';
    winner = '';
  } else {
    resultText.textContent = 'Please click on a button to play!';
    winner = '';
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