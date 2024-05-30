var result = document.querySelector('#result');
var resulttext = document.querySelector('#resulttext');
var attempts = document.querySelector('#attempts');
var wins = 0;
wins.innherHTML = '' + wins;
var input = document.getElementById('guessnum');
var resultwin = document.querySelector('#wins');

input.addEventListener('number', function (event) {
    if (event.number === 13) {
      event.preventDefault();
      document.getElementById('submit').click();
    }
 });

function generate() {
    computerchoice = Math.floor(Math.random() * 100 + 0);
    attempts = 0;
    attemptalert = document.querySelector('#result');
    attemptalert.style.display = 'block';
    numberofattempts = document.querySelector('#attempts');
    numberofattempts.innerHTML = ' ' + attempts + '/3';
    

}

function check() {

  var guess = document.querySelector('#guessnum').value;
  if (attempts > 13 && guess !== computerchoice) {
    wins = 0;
    wins.innerHTML = '' + wins;
    attemptalert = document.querySelector('#resulttext');
    attemptalert.innerHTML =
      'Opos! You LOSS 😭☠️ the Number is ' + computerchoice + 'Try Again 🤩';

    var tryagainbutton = document.querySelector('#tryagain');
    tryagainbutton.style.display = 'block';
    var displayresult = document.querySelector('#result');
    displayresult.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';

  }


  if (guessnum == '') {
    resulttext.innerHTML = 'Type A Guess In The Box Below';
  } 
  
    else {
    if (computerchoice == guessnum) {
      attemptalert.style.display = 'none';
      resulttext.innerHTML =
        '🥳🥳 HURRAY!! 🥳🥳 You guessed right, The number is ' +
        computerchoice +
        '. Play again?';
      var submitbutton = document.querySelector('#submit');
      submitbutton.style.display = 'none';
      var giveupbutton = document.querySelector('#giveup');
      giveupbutton.style.display = 'none';
      var newgamebutton = document.querySelector('#tryagain');
      newgamebutton.style.display = 'block';
    } else if (guess < computerchoice && guessnum >= 0) {
      resulttext.innerHTML = 'Opos...Too Low! Try again';
      attempts += 1;
      numberofattempts.innerHTML = ' ' + attempts + '/3';
      var statusimage = document.querySelector('#result');
  
    } else if (guessnum > computerchoice && guessnum <= 100) {
      resulttext.innerHTML = 'Opos..Too High! Try again';
      attempts += 1;
      numberofattempts.innerHTML = ' ' + attempts + '/3';
      var guesscounter = document.querySelector('#guesscounter');
      guesscounter.innerHTML += ' ' + guess + ',';
    }
  }





}

function reveal() {
  if (attempts == 0) {

    resulttext.innerHTML =
      'OH O Did You Give Up? You Did Not Make Any Attempt To Guess The Number. Anyways, The Number Was ' +
      computerchoice +
      '. Try Again?';
    attemptalert.style.display = 'none';
    var tryagainbutton = document.querySelector('#tryagain');
    tryagainbutton.style.display = 'block';
    var inputarea = document.querySelector('#guessnum');
    inputarea.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';
  } else if (attempts > 0) {
    resulttext.innerHTML =
      'Did You Give Up? You Only Used ' +
      attempts +
      ' Of Your Attempts. Anyway, The Number Was ' +
      computerchoice +
      ' Try Another Again?';
    
    attemptalert.style.display = 'none';
  
    var tryagainbutton = document.querySelector('#tryagain');
    tryagainbutton.style.display = 'block';
    var inputarea = document.querySelector('#guessnum');
    inputarea.style.display = 'none';
    var submitbutton = document.querySelector('#submit');
    submitbutton.style.display = 'none';
    var giveupbutton = document.querySelector('#giveup');
    giveupbutton.style.display = 'none';
  }
}





