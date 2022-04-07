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
// uncomment to check that computerPlay is working as intended: console.log(computerPlay(1, 3));

// Player makes their choice
function playerPlay() {
  let playerChoice = prompt('Rock, Paper, or Scissors? ', '');
  playerChoice = playerChoice.toLowerCase();
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

// check that playerPlay is functioning as intended: console.log(playerPlay());

// Rock Paper Scissors
function singleRound(playerSelection, computerSelection) {
  if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    return 'You lose! Paper beats Rock.';
  } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    return 'You win! Rock beats Scissors.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    return 'You win! Paper beats Rock.';
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    return 'You lose! Scissors beats Paper.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    return 'You lose! Rock beats Scissors.';
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    return 'You win! Scissors beats Paper.';
  } else if (playerSelection === computerSelection) {
      let again = prompt('It\'s a tie, want to play again? ', 'yes or no');
      again = again.toLowerCase();
      if (again === 'yes') {
        return singleRound(playerPlay(), computerPlay(1, 3));
      }
      else {
        return 'Thanks for playing! See you next time! :)';
      }  
  } else {
    console.log('Something went wrong... try again!');
    return singleRound(playerPlay(), computerPlay(1,3));
  }
}

console.log(singleRound(playerPlay(), computerPlay(1,3)));