let playerWinCount = 0;
let computerWinCount = 0;
let computerChoice = '';
let winner = '';

// grab elements
let results = document.querySelector('.results');
let playerScore = document.createElement('div');
let computerScore = document.createElement('div');
let resultText = document.createElement('div');
let buttons = document.querySelector('.btns');

// set initial div content
results.appendChild(playerScore);
playerScore.classList.add('player-score');
playerScore.textContent = `Player: ${playerWinCount}`;


results.appendChild(computerScore);
computerScore.classList.add('computer-score');
computerScore.textContent = `Computer: ${computerWinCount}`;


results.appendChild(resultText);
resultText.classList.add('result-text');


// use event delegation on buttons div to get value for playerChoice, then pass playerChoice into playRound
buttons.addEventListener('click', function (e) { 
  let playerChoice = e.target.textContent;
  playRound(playerChoice, computerPlay(1, 3));
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

function updateScore(winner) {
  if (winner === 'computer' && playerWinCount < 5 && computerWinCount < 5) {
    computerScore.textContent = `Computer: ${computerWinCount}`;
  }
  else if (winner === 'player' && playerWinCount < 5 && computerWinCount < 5) {
    playerScore.textContent = `Player: ${playerWinCount}`;
  }
  else if (winner === 'player' && playerWinCount === 5) {
    playerScore.textContent = `Player: ${playerWinCount}`;
    setTimeout(function() {
      resultText.textContent = 'You win! Refresh to play again!';
    }, 500);
  }
  else if (winner === 'computer' && computerWinCount === 5) {
    computerScore.textContent = `Computer: ${computerWinCount}`;
    setTimeout(function() {
      resultText.textContent = 'Computer wins! Refresh to play again!';
    }, 500);
  }
}

// Execute single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  let computerChoiceText = `The computer chose ${computerChoice}. `;
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    let roundResult = 'You lose this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
    computerWinCount++;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    let roundResult = 'You win this round! Rock beats Scissors.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
    playerWinCount++;
    playerScore.textContent = playerWinCount;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    let roundResult = 'You win this round! Paper beats Rock.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
    playerWinCount++;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    let roundResult = 'You lose this round! Scissors beats Paper.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
    computerWinCount++;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    let roundResult = 'You lose this round! Rock beats Scissors.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'computer';
    computerWinCount++;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    let roundResult = 'You win this round! Scissors beats Paper.';
    resultText.textContent = computerChoiceText + roundResult;
    winner = 'player';
    playerWinCount++;
  } else if (playerSelection === computerSelection) {
    resultText.textContent = 'This round is a tie!';
    winner = '';
  } else {
    resultText.textContent = 'Please click on a button to play!';
    winner = '';
  }
  updateScore(winner);
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