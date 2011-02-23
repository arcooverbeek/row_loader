$(document).ready(function() {  
  $('#next').live('inview', function(event, visible) {
    if (visible) {
      if ($(this).hasClass('loaded') == false) {
        var url = $(this).attr("href");
        $.get(url, function(data) {
          $('#rows').append(data);
          alert('Load was performed.');
        });
        $(this).addClass('loaded');
      }
    }
  });
});