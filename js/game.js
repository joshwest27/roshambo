'use strict';

// Sounds
let btnClick = new Audio('sounds/clickSound.mp3');
let matchStart = new Audio('sounds/match_start.mp3');
let playGame = new Audio('sounds/playGame.mp3');
let winSound = new Audio('sounds/win.mp3');
let loseSound = new Audio('sounds/lose.mp3');
let loseGame = new Audio('sounds/boo.mp3');
let tieGame = new Audio('sounds/tie.mp3');
let soundsArr = [btnClick, matchStart, playGame, winSound, loseSound, loseGame, tieGame];

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
function hideImages() {
  $('#challenge').hide();
  $('#battle').hide();
  $('#rockRight').hide();
  $('#rockLeft').hide();
  $('#papRight').hide();
  $('#papLeft').hide();
  $('#sciRight').hide();
  $('#sciLeft').hide();
  $('#results').hide();
  $('#nextGame').hide();
}
hideImages();
initiateMatch();

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

// Initialize game when Good Luck/Next Match button is pushed
function initiateMatch() {
  $('#challenge').click(function() {
    // soundsArr[1].play();
    randNumber();
    $('#battle').show();
    $('#battle').effect( 'bounce', {times:2}, 'slow');
    $('#challenge').delay(1100).fadeOut(500);
    $('#battle').delay(500).fadeOut(400);
    setTimeout(showResults, 1500);
    scoreBoard();
  });
}

// Initialize game when Good Luck/Next Match button is pushed
// $(document).ready(function () {
//   $('#challenge').click(function() {
//     // soundsArr[1].play();
//     randNumber();
//     $('#battle').show();
//     $('#battle').effect( 'bounce', {times:2}, 'slow');
//     $('#challenge').delay(1100).fadeOut(500);
//     $('#battle').delay(500).fadeOut(400);
//     setTimeout(showResults, 1500);
//     scoreBoard();
//   });
// });

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
  setTimeout(playAnother, 4200);
}

// Compare choices and increment correct field
function trackMatches() {
  switch(playerCoice) {

  case 'Rock':
    if(myRock === true && compScissors === true) {
      playerWin++;
      game++;
      soundsArr[3].play();
    }else if(myRock === true && compPaper === true) {
      compWin++;
      game++;
      soundsArr[4].play();
    }else if(myRock === true && compRock === true) {
      game++;
      soundsArr[6].play();
    }
    break;

  case 'Paper':
    if(myPaper === true && compRock === true) {
      playerWin++;
      game++;
      soundsArr[3].play();
    }else if(myPaper === true && compScissors === true) {
      compWin++;
      game++;
      soundsArr[4].play();
    }else if(myPaper === true && compPaper === true) {
      game ++;
      soundsArr[6].play();
    }
    break;

  case 'Scissors':
    if(myScissors === true && compPaper === true) {
      playerWin++;
      game++;
      soundsArr[3].play();
    }else if(myScissors === true && compRock === true) {
      compWin++;
      game++;
      soundsArr[4].play();
    }else if(myScissors === true && compScissors === true) {
      game++;
      soundsArr[6].play();
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

function playAnother() {
  $('#nextGame').show();
  $('#nextGame').click(function() {
    $('#b1').show();
    $('#b2').show();
    $('#b3').show();
    $('#nextGame').hide();
    document.getElementById('yourChoice').innerHTML = 'Pick Again!';
    hideImages();
    endGame();
  });
}

function endGame(){
  if(playerWin === 2 || compWin === 2){
    document.getElementById('yourChoice').innerHTML = 'Game Over!';
    hideImages();
  }
}