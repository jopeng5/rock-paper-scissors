// Computer makes its choice
function computerPlay(min, max) {
  let randNumber = Math.floor(Math.random() * (max - min + 1) + min);
  if (randNumber === 1) {
    return 'Rock';
  } else if (randNumber === 2) {
    return 'Paper'
  } else {
    return 'Scissors'
  }
}
console.log(computerPlay(1, 3));