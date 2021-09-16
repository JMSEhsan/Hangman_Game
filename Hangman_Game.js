// Hangman Game using function

// create an array of words

var words = ["javascript", "monkey", "banana", "amazing", "apple"];

// create a function to pick random words
var pickWord = function(){
    return words[Math.floor(words.length*Math.random())];
};

// return the answer array
var setupAnswerArray = function(word){
    var answerArray = [];
    for (var i = 0; i < word.length; i++){
        answerArray[i] = "_";
    }
    return answerArray;
};

// show the player their progress
var showPlayerProgress = function(answerArray){
    console.log('\n'+answerArray.join(" ")+'\n');    
};

//console.log(".....");
//function to get a guess

var getGuess = function(){
    const prompt= require("prompt-sync")();
//const prompt = ps();
    let guess = prompt("Enter a single letter: ");
    return guess;
};

var updateGameState = function (guess, word, answerArray) {
    var count = 0;
    for ( var j = 0; j < word.length; j++){
        if (word[j] === guess && answerArray[j] === "_"){
            answerArray[j] = guess;
            count++;
        }
    }
    return count;
// Update answerArray and return a number showing how many
// times the guess appears in the word so remainingLetters
// can be updated
};

var showAnswerAndCongratulatePlayer = function (answerArray) {
    //console.log(" ");
    console.log("Good job! the answer was: "+ word+'\n');
    //console.log(" ");
// Use alert to show the answer and congratulate the player
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;

while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
    break;
    } 
    else if (guess.length !== 1) {
    console.log('\n'+"Please enter a single letter!");
    } 
    else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
    }
}
showPlayerProgress(answerArray);
showAnswerAndCongratulatePlayer(answerArray);

//End