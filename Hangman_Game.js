// Hangman Game using function

// create an array of words

var words = ["javascript", "monkey", "banana", "amazing", "apple"];

var pickWord = function(){
    return words[Math.floor(words.length*Math.random())];
};

console.log(pickWord());

