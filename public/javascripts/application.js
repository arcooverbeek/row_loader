$(document).ready(function() {  
  $('#next').live('inview', function(event, visible) {
    if (visible) {
      var url = $(this).attr("href");
      $(this).remove();
      $('#status').html("Loading..");
      $.get(url, function(data) { 
        $('.rowlist').append(data);
        $('#status').html("Idle");
      });
    }
  });
});