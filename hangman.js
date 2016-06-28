// Hangman

var word = pickWord(wordList);
// creates a string of the same length as word, but each char is an underscore
var maskedWord = mask(word);

console.log(word);
console.log(maskedWord);
console.log(displayScore(maskedWord));

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
  // join the masked array into a showable string
  return maskedWord.join(' ');
}

