'use strict';

// Sounds
let btnClick = new Audio('sounds/clickSound.mp3');
let soundsArr = [btnClick];

// Player chooses rock
$('#b1').click(function() {
  $('#b2').hide();
  $('#b3').hide();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Rock!';
});

// Player chooses paper
$('#b2').click(function() {
  $('#b1').hide();
  $('#b3').hide();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Paper!';
});

// Player chooses scissors
$('#b3').click(function() {
  $('#b1').hide();
  $('#b2').hide();
  soundsArr[0].play();
  document.getElementById('yourChoice').innerHTML = 'Scissors!';
});


