$(document).ready(function() {  
  $('#next').live('inview', function(event, visible) {
    if (visible) {
      $('#loader').show();
      var url = $(this).attr("href");
      $.get(url, function(data) {
        $('#next').addClass('loaded');
        $('.rowlist').append(data);
        $('#loader').hide();
      });
      $('.loaded').remove();
    }
  });
});