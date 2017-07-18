$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#calendar').datepicker();
  $('#calendarYear').datepicker({changeYear: true});
});