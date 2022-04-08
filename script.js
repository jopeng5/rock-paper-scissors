// Computer makes a choice at random
function computerPlay(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  let computerChoice;
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
// Check that computerPlay is functioning as intended: console.log(computerPlay(1, 3));

// Player makes their choice
function playerPlay() {
  let playerChoice = prompt('Rock, Paper, or Scissors? ', '').toLowerCase();
  if (playerChoice === 'rock') {
    console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
    return 'Rock';
  } else if (playerChoice === 'paper') {
    console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
    return 'Paper';
  } else if (playerChoice === 'scissors') {
    console.log(`You chose ${playerChoice[0].toUpperCase() + playerChoice.substring(1)}.`);
    return 'Scissors';
  } else {
    console.log('Sorry, you must choose either Rock, Paper, or Scissors. Please try again!');
    return playerPlay();
  }
}
// Check that playerPlay is functioning as intended: console.log(playerPlay());

let playerWinCount = 0;
let computerWinCount = 0;

// Play single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    console.log('You lose this round! Paper beats Rock.');
    return computerWinCount++;
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    console.log('You win this round! Rock beats Scissors.');
    return playerWinCount++;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    console.log('You win this round! Paper beats Rock.');
    return playerWinCount++;
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
    console.log('Something went wrong... try again!');
    return playRound(playerPlay(), computerPlay(1,3));
  }
}

// Play 5-round game of Rock Paper Scissors and announce the winner
function game() {
  for (let i = 0; i < 5; i++) {
    playRound(playerPlay(), computerPlay(1,3));
  }
  if (playerWinCount > computerWinCount) {
    console.log(`You win ${playerWinCount} to ${computerWinCount}!`);
  } else if (playerWinCount === computerWinCount) {
    console.log(`It\'s a tie! Your final score: ${playerWinCount}. Computer\'s final score: ${computerWinCount}.`);
  } else {
    console.log(`You lose ${playerWinCount} to ${computerWinCount}!`);
  }
}

game();