$(document).ready(function() {  
  $('#next').live('inview', function(event, visible) {
    if (visible) {
      $('#loader').show();
      var url = $(this).attr("href");
      $.get(url, function(data) {
        $('#next').addClass('loaded');
        $('#rows').append(data);
        $('#loader').hide();
      });
      $('.loaded').remove();
    }
  });
});