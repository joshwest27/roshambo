// This is a simple Rock, Paper, Scissors game.
'use strict!';


// Login page
// const welcomeUser = (userName) => {
//   console.log(`Hello ${userName}. Let's play some Rock, Paper, Scissors!`);
// };

// welcomeUser();

// Toggle sound on and off
$('#muteIcon').hide();

$('#sndIcon').click(function() {
  $('#sndIcon').hide();
  $('#muteIcon').show();
});

$('#muteIcon').click(function() {
  $('#muteIcon').hide();
  $('#sndIcon').show();
});



