$(document).ready(function() {
  setCopyrightDate();
});

function setCopyrightDate() {
  var thisYear = new Date().getFullYear();
  $('#copyright').text(thisYear);
}
