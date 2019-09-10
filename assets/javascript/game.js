var computerGuess;
var userGuesses = [];
var attempts = 0;

function newGame(){
    window.location.reload();
}

function init() {
    computerGuess = Math.floor(Math.random() * 100 + 1);
}

function compareGuess(){
    var userGuess = document.getElementById('inputBox').value;

    userGuesses.push(userGuess);
    document.getElementById('guessLog').innerHTML = userGuesses;

    attempts++;
    document.getElementById('attempts').innerHTML = attempts;


if(userGuess > computerGuess){
    document.getElementById('textOutput').innerHTML= "You're too high!";
    document.getElementById('inputBox').value = "";

} else if (userGuess < computerGuess){
    document.getElementById('textOutput').innerHTML= "Too low my friend!";
    document.getElementById('inputBox').value = "";
} else{
    document.getElementById('textOutput').innerHTML= "YOU GOT IT!";
}
}
