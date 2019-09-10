var randomNumber = getRandomNumber(20);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper){
    var num = Math.floor(Math.random()*upper) +1;
    return num; 
}

while(true){
    guess = prompt('I am thinking of a number between 1 and 50. What is it?')
    guessCount += 1;
    if (parseInt(guess) === randomNumber){
        correctGuess = true;
        break;
    }
}

document.write('<h1>You Guessed the Number!');

document.write('It took you'+" "+ guessCount+'tries to guess the number'+" "+randomNumber);