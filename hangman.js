// Hangman

// var word = pickWord(wordList);
// creates a string of the same length as word, but each char is an underscore
// var maskedWord = mask(word);
// var guess = getPlayerGuess();
// var remainingLetters = word.length;

var word = 'apple';
var maskedWord = mask(word);
var remainingLetters = word.length;
// var guess = getPlayerGuess();
// var indexes = checkGuess(guess, word);
// updateScore(guess, indexes, maskedWord);
// console.log(maskedWord);
runRound();

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
  return maskedWord.join(' ').toUpperCase();
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

// check the target word for the guessed letter
function checkGuess(guess, word) {
  var indexes = [];

  // loop over each character
  for (var i = 0; i < word.length; i++) {
    // check if the current position in the masked word is still not filled in
    if (maskedWord[i] !== '_') {
      continue;
    }
    // check whether the current character is equal to the guess, and not filled in
    if (word[i] === guess) {
      // if it is, push it's index in the word to indexes array
      indexes.push(i);
      // reduce the remainingLetters counter
      remainingLetters--;
    }
  };

  // return the list of indexes that need to be updated
  return indexes;
}

// update the scoreboard for the game
function updateScore(guess, indexes) {
  // iterate over each index, and assign the guessed letter to its position
  // within the masked word
  indexes.forEach(function(i) {
    maskedWord[i] = guess;
  });
}

function runRound() {
  // show the scoreboard
  alert(displayScore(maskedWord));
  // get a guess from the player
  var guess = getPlayerGuess();

  // if we get null back from getPlayerGuess, it means they want to quit
  if (guess === null) {
    return null;
  }
  else {
    // keep asking for a guess if it isn't 1 letter long
    while (guess.length !== 1) {
      guess = getPlayerGuess();
    }

    // check the guess against the word
    var updateIndexes = checkGuess(guess, word);
    // dat scoreboard, update it
    updateScore(guess, updateIndexes);
  }
}

