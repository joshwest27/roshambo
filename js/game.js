'use strict';

// Sounds
let btnClick = new Audio('sounds/clickSound.mp3');
let matchStart = new Audio('sounds/match_start.mp3');
let soundsArr = [btnClick, matchStart];

// Assign value to RPS choice
let myRock;
let myPaper;
let myScissors;

// Hide challenge button
$('#challenge').hide();
$('#battle').hide();
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
    soundsArr[1].play();
    $('#battle').show();
    $('#battle').effect( 'bounce', {times:3.5}, 'slow');
    $('#battle').fadeOut(350);
    $('#challenge').fadeOut(1200);
  });
});

function showResults() {
    $('#battle').delay(1500).fadeIn();
  if(myRock === true){
    $('#battle').replaceWith('<img id="fistRight" src="img/rockRight.jpg"/>').fadeIn(5000);
  }
}


