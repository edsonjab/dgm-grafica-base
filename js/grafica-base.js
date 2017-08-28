$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
  $('#calendar').datepicker();
  $('#calendarYear').datepicker({changeYear: true});

  $('.right-side-menu a').on('click', function() {
    var selected = $(this).attr('href');

    if (selected === '#objetivo') {
      $('html, body').animate({scrollTop:0}, 700);
    } else {
      $('html, body').animate({
        scrollTop: $(selected).offset().top - 125
      }, 500);
    }
  });
});