$(document).ready(function() {
  setClock();
});

function setClock() {
  $('#clock').text(getTimeString());
}

function getTimeString() {
  var date = new Date();
  
  var hours = date.getHours();
  var amPm = (hours >= 12) ? 'PM' : 'AM';
  
  hours = (hours +11) % 12 + 1;
  if (hours < 10)
    hours = '0' + hours;
  
  var minutes = date.getMinutes();
  if (minutes < 10)
    minutes = '0' + minutes;
  
  var seconds = date.getSeconds();
  if (seconds < 10)
    seconds = '0' + seconds;
  
  return hours + ':' + minutes + ':' + seconds + ' ' + amPm;
}