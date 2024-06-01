const body = document.querySelector('body');
const secretNumber = document.querySelector('.number');
const numberGuess = document.querySelector('.guess');
const btnCheck = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const btnAgain = document.querySelector('.again');


//secret number generate and initialize all nessary variable
let secretNumberGenerator = parseInt(Math.random() * 100 + 1);
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
  else if (gussesNumber === secretNumberGenerator) {
    message.textContent = '🎉Hurray! You guessed the Correct Number!🥳';
    secretNumber.textContent = secretNumberGenerator;
  


    if (initialScore > highestScore) {
      highestScore = initialScore;
      highscore.textContent = highestScore;
    }
  }
  //The check number is not equal
  else if (gussesNumber !== secretNumber) {
    if (initialScore >= 1) {
      if (gussesNumber > secretNumberGenerator) {
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
  secretNumberGenerator = parseInt(Math.random() * 100 + 1);
  initialScore = highestInitialScoure;
  score.textContent = initialScore;
  displayMessage('Start guessing...');
  secretNumber.textContent = '?';
  numberGuess.value = '';
  secretNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
}


btnCheck.addEventListener('click', guessNumber);
btnAgain.addEventListener('click', restoreGameValue);

    