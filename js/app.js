// This is a simple Rock, Paper, Scissors game.
'use strict!';

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



