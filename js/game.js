'use strict';

// Sounds
let btnClick = new Audio('sounds/clickSound.mp3');
let matchStart = new Audio('sounds/match_start.mp3');
let playGame = new Audio('sounds/playGame.mp3');
let soundsArr = [btnClick, matchStart, playGame];

// Assign value to RPS choice & global variable
let myRock = false;
let myPaper = false;
let myScissors = false;
let compChoice = '';

// Generate random number
function randNumber() {
  compChoice = (Math.floor(Math.random() * 3) + 1);
  if(compChoice === 1) {
    compChoice = '<img id="fistLeft" src="img/rockLeft.jpg"/>';
  }else if(compChoice === 2) {
    compChoice = '<img id="papLeft" src="img/paperLeft.jpg"/>';
  }else{
    compChoice = '<img id="sciLeft" src="img/scissorsLeft.jpg"/>';
  }
}

// Hide challenge button
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
$('#b1').click(function() {
  $('#b2').hide();
  $('#b3').hide();
  $('#challenge').show();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Rock!';
  myRock = true;
});

// Player chooses paper
$('#b2').click(function() {
  $('#b1').hide();
  $('#b3').hide();
  $('#challenge').show();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Paper!';
  myPaper = true;
});

// Player chooses scissors
$('#b3').click(function() {
  $('#b1').hide();
  $('#b2').hide();
  $('#challenge').show();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Scissors!';
  myScissors = true;
});

$(document).ready(function () {
  $('#challenge').click(function() {
    // soundsArr[1].play();
    randNumber();
    $('#battle').show();
    $('#battle').effect( 'bounce', {times:3.5}, 'slow');
    $('#battle').fadeOut(350);
    $('#challenge').fadeOut(1200);
  });
});

setTimeout(results, 4500);
function results() {
  showResults();
}

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
  showRound();
}

// Challege button innerHTML change
function showRound() {
  document.getElementById('challenge').innerHTML = 'Round One!';
  $('#challenge').fadeIn(1000);
}





