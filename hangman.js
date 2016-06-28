// Hangman

var word = pickWord(wordList);
// creates a string of the same length as word, but each char is an underscore
var maskedWord = mask(word);
var guess = getPlayerGuess();

console.log(word);
console.log(maskedWord);
console.log(displayScore(maskedWord));
console.log(guess);

// chooses a random word from an array of words
function pickWord(wordArray) {
  // choose a random number from 0 to 1 less than the length of the array
  var index = Math.floor(Math.random() * wordArray.length);
  // grab the word and return it as an array of characters
  return wordArray[index].split('');
}

// uses the length of the target word to make a masked word array of the same length
function mask(word) {
  var masked = new Array(word.length);
  masked.fill('_', 0, word.length);
  return masked;
}

// display the game progress to the player
function displayScore(maskedWord) {
  // join the masked array into a readable string
  return maskedWord.join(' ');
}

// asks the player to guess a letter
// if they click Cancel, this will end the game
function getPlayerGuess() {
  var guess = prompt('Guess a letter, or click Cancel to quit.');

  // guess will be null when they click Cancel instead of entering a char
  if (guess === null) {
    return null;
  }
  // we only want single letter guesses
  else if (guess.length !== 1) {
    alert('Please enter a single letter.');
  }
  // if it's just a single letter, we're good to go
  else {
    return guess.toLowerCase();
  }
}

