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
var showPlayersProgress = function(answerArray){
    console.log(setupAnswerArray(pickWord()));
};

//function to get a guess
var getGuess = function(){
    const prompt = require('prompt-sync')();
    const guess = prompt('Enter a single letter: ');
    console.log(guess);
};
  


