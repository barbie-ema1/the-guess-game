const body = document.querySelector('body');
const hiddenNumber = document.querySelector('.number');
const numberGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');


//secret number generate and initialize all nessary variable
let hiddenNumberGenerator = parseInt(Math.random() * 100 + 1);
const highestInitialScoure = 3;
let initialScore = highestInitialScoure;
score.textContent = initialScore;
let highestScore = 0;


//Function for dispaly various message 
function displayMessage(dismessage) {
  message.textContent = dismessage;
  
}


//Main Function for Guess Number
function guessNumber() {
  const gussesNumber = parseInt(numberGuess.value);
  //Not input any number
  if (!gussesNumber) {
    displayMessage('Opos you didnt guess any number😱');
    console.log('#DAF7A6');
  }
  //The check number is equal
  else if (gussesNumber === hiddenNumberGenerator) {
    message.textContent = '🎉Hurray! You guessed the Correct Number!🥳';
    


    if (initialScore > highestScore) {
      highestScore = initialScore;
      highscore.textContent = highestScore;
    }
  }
  //The check number is not equal
  else if (gussesNumber !== hiddenNumber) {
    if (initialScore >= 1) {
      if (gussesNumber > hiddenNumberGenerator) {
        displayMessage('Opos! You Guessed too high📈');
        initialScore--;
        score.textContent = initialScore;
      } else {
        displayMessage('Opos! You Guessed too low📉');
        initialScore--;
        score.textContent = initialScore;
      }
    } else {
      initialScore = 0;
      score.textConten = 0;
      displayMessage('😭You lost the game! Try Again..😭');
    }
  } else {
    displayMessage('🤕 Something Wrong! Try Again..');
  }
}


//Restore initial game value
function restoreGameValue() {
  hiddenNumberGenerator = parseInt(Math.random() * 100 + 1);
  initialScore = highestInitialScoure;
  score.textContent = initialScore;
  displayMessage('Start guessing...');
  hiddenNumber.textContent = '?';
  numberGuess.value = '';
  body.style.backgroundColor = '#222';
}


btnCheck.addEventListener('click', guessNumber);
btnAgain.addEventListener('click', restoreGameValue);

    