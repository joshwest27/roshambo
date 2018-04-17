'use strict';

// Sounds
let btnClick = new Audio('sounds/clickSound.mp3');
let matchStart = new Audio('sounds/match_start.mp3');
let playGame = new Audio('sounds/playGame.mp3');
let soundsArr = [btnClick, matchStart, playGame];

// Assign boolean to RPS choice & global variable
let myRock = false;
let myPaper = false;
let myScissors = false;
let compChoice = '';
let compRock = false;
let compPaper = false;
let compScissors = false;


// Generate random number as computer pick
function randNumber() {
  compChoice = (Math.floor(Math.random() * 3) + 1);
  if(compChoice === 1) {
    compRock = true;
    compChoice = '<img id="fistLeft" src="img/rockLeft.jpg"/>';
  }else if(compChoice === 2) {
    compPaper = true;
    compChoice = '<img id="papLeft" src="img/paperLeft.jpg"/>';
  }else{
    compScissors = true;
    compChoice = '<img id="sciLeft" src="img/scissorsLeft.jpg"/>';
  }
}

// Hide images
$('#challenge').hide();
$('#battle').hide();
$('#rockRight').hide();
$('#rockRight').hide();
$('#papRight').hide();
$('#papLeft').hide();
$('#sciRight').hide();
$('#sciLeft').hide();
$('#results').hide();

// Player chooses rock
$(document).ready(function() {
  $('#b1').click(function() {
    soundsArr[0].play();
    $('#b2').hide();
    $('#b3').hide();
    $('#challenge').show();
    document.getElementById('yourChoice').innerHTML = 'Rock!';
    myRock = true;
  });
});

// Player chooses paper
$(document).ready(function() {
  $('#b2').click(function() {
    soundsArr[0].play();
    $('#b1').hide();
    $('#b3').hide();
    $('#challenge').show();
    document.getElementById('yourChoice').innerHTML = 'Paper!';
    myPaper = true;
  });
});

// Player chooses scissors
$(document).ready(function() {
  $('#b3').click(function() {
    soundsArr[0].play();
    $('#b1').hide();
    $('#b2').hide();
    $('#challenge').show();
    document.getElementById('yourChoice').innerHTML = 'Scissors!';
    myScissors = true;
  });
});

// Initialize game when Good Luck button is pushed
$(document).ready(function () {
  $('#challenge').click(function() {
    // soundsArr[1].play();
    randNumber();
    $('#battle').show();
    $('#battle').effect( 'bounce', {times:3.5}, 'slow');
    // $('#battle').fadeOut(350);
    // $('#challenge').fadeOut(1200);
    showResults();
  });
});

// Pause show results
// setTimeout(results, 4500);
// function results() {
//   showResults();
// }

// Show results
function showResults() {
  $('#fistRight').hide();
  $('#fistLeft').hide();
  $('#battle').fadeIn(1000);
  if(myRock === true){
    $('#fistRight').replaceWith('<img id="fistRight" src="img/rockRight.jpg"/>', compChoice).fadeIn(1000);
  }else if(myPaper === true) {
    $('#fistRight').replaceWith('<img id="papRight" src="img/paperRight.jpg"/>', compChoice).fadeIn(1000);
  }else if(myScissors === true) {
    $('#fistRight').replaceWith('<img id="sciRight" src="img/scissorsRight.jpg"/>', compChoice).fadeIn(1000);
  }
}

function trackWins() {
  if(myRock === true && )
}

// Challege button innerHTML change
// function showRound() {
//   document.getElementById('challenge').innerHTML = 'Round One';
//   $('#challenge').fadeIn(1000);
// }




