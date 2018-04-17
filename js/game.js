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
let playerWin = 0;
let compWin = 0;
let game = 0;
let playerCoice;


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
    playerCoice = 'Rock';
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
    playerCoice = 'Paper';
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
    playerCoice = 'Scissors';
    myScissors = true;
  });
});



// Initialize game when Good Luck button is pushed
$(document).ready(function () {
  $('#challenge').click(function() {
    soundsArr[1].play();
    randNumber();
    $('#battle').show();
    $('#battle').effect( 'bounce', {times:2}, 'slow');
    $('#challenge').delay(1100).fadeOut(500);
    $('#battle').delay(500).fadeOut(400);
    setTimeout(showResults, 1500);
    scoreBoard();
  });
});

// Show results
function showResults() {
  $('#fistRight').delay(1000).hide();
  $('#fistLeft').delay(1000).hide();
  $('#battle').delay(2000).fadeIn(1000);
  if(myRock === true){
    $('#fistRight').replaceWith('<img id="fistRight" src="img/rockRight.jpg"/>', compChoice).fadeIn(1000);
  }else if(myPaper === true) {
    $('#fistRight').replaceWith('<img id="papRight" src="img/paperRight.jpg"/>', compChoice).fadeIn(1000);
  }else if(myScissors === true) {
    $('#fistRight').replaceWith('<img id="sciRight" src="img/scissorsRight.jpg"/>', compChoice).fadeIn(1000);
  }
}

function scoreBoard() {
  setTimeout(trackMatches, 4000);
  setTimeout(populateScore, 4000);
}

// Compare choices and increment correct field
function trackMatches() {
  switch(playerCoice) {

  case 'Rock':
    if(myRock === true && compScissors === true) {
      playerWin++;
      game++;
    }else if(myRock === true && compPaper === true) {
      compWin++;
      game++;
    }else if(myRock === true && compRock === true) {
      game++;
    }
    break;

  case 'Paper':
    if(myPaper === true && compRock === true) {
      playerWin++;
      game++;
    }else if(myPaper === true && compScissors === true) {
      compWin++;
      game++;
    }else if(myPaper === true && compPaper === true) {
      game ++;
    }
    break;

  case 'Scissors':
    if(myScissors === true && compPaper === true) {
      playerWin++;
      game++;
    }else if(myScissors === true && compRock === true) {
      compWin++;
      game++;
    }else if(myScissors === true && compScissors === true) {
      game++;
    }
    break;
  }
}

function populateScore() {
  document.getElementById('pCount').innerHTML = `Player wins: ${playerWin}`;
  document.getElementById('mCount').innerHTML = `Matches: ${game}`;
  document.getElementById('cCount').innerHTML = `Computer wins: ${compWin}`;
  displayWinner();
}

function displayWinner () {
  if(playerWin) {
    document.getElementById('yourChoice').innerHTML = 'You Win!';
  }else if(compWin) {
    document.getElementById('yourChoice').innerHTML = 'You Lose!';
  }else{
    document.getElementById('yourChoice').innerHTML = 'Tie!';
  }
}







